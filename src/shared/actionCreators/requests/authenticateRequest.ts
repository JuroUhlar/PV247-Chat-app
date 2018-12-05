import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import * as uuid from 'uuid';
import {
  BEARER_ROUTE,
  SERVER_ROUTE,
  USERS_ROUTE
} from '../../constants/routes';
import { checkStatus } from '../../utils/checkStatus';
import {
  failToCreateBearer,
  requestBearer,
  succeedToCreateBearer
} from '../actionCreators';
import { IUserServerModel } from '../../../profile/models/User';
import { getBearer } from '../../utils/getBearer';

const createBearerFactoryDependencies = {
  postBegin: requestBearer,
  success: succeedToCreateBearer,
  error: failToCreateBearer,
  fetchLogin: (email: string) => fetch(BEARER_ROUTE, {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      accept: 'application/json',
    },
  })
    .then(response => checkStatus(response)),
  fetchUser: (email: string) => fetch(`${SERVER_ROUTE}${USERS_ROUTE}${email}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: getBearer(),
    },
  })
    .then(response => checkStatus(response)),
  idGenerator: uuid,
};

interface ICreateBearerFactoryDependencies {
  readonly postBegin: () => Action;
  readonly success: (json: object, userId: Uuid) => Action;
  readonly error: (id: string, error: Error) => Action;
  readonly fetchLogin: (email: string) => Promise<Response>;
  readonly idGenerator: () => string;
  readonly fetchUser: (email: string) => Promise<Response>;
}

const createBearerFactory = (dependencies: ICreateBearerFactoryDependencies) => (email: string) =>
  (dispatch: Dispatch): Promise<Action> => {
    dispatch(dependencies.postBegin());
    const errorId = dependencies.idGenerator();

    return dependencies.fetchLogin(email)
      .then(response => response.json())
      .then(object => {
        localStorage.setItem('user', object.token);

        return dependencies.fetchUser(email)
          .then(response => response.json())
          .then((user: IUserServerModel) =>
            dispatch(dependencies.success(object, user.customData.id)))
          .catch((error: Error) => dispatch(dependencies.error(errorId + 'user', error)));
      })
      .catch((error: Error) => dispatch(dependencies.error(errorId, error)));
  };

export const auth = createBearerFactory(createBearerFactoryDependencies);
