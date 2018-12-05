import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import * as uuid from 'uuid';
import {
  failToFetchUser,
  requestUser,
  succeedToFetchUser
} from '../usersActionCreators';
import {
  SERVER_ROUTE,
  USERS_ROUTE
} from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';
import { convertServerToViewUserModel } from '../../utils/convertUserModels';
import { getBearer } from '../../../shared/utils/getBearer';

const fetchUserFactoryDependencies = {
  fetchBegin: requestUser,
  success: succeedToFetchUser,
  error: failToFetchUser,
  fetch: (email: string) => fetch(`${SERVER_ROUTE}${USERS_ROUTE}${email}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: getBearer(),
    },
  })
    .then(response => checkStatus(response)),
  idGenerator: uuid,
};

interface IFetchUserFactoryDependencies {
  readonly fetchBegin: () => Action;
  readonly success: (json: object) => Action;
  readonly error: (id: string, error: Error) => Action;
  readonly fetch: (email: string) => Promise<Response>;
  readonly idGenerator: () => string;
}

const fetchUserFactory = (dependencies: IFetchUserFactoryDependencies) => (email: string) =>
  (dispatch: Dispatch): Promise<Action> => {
    dispatch(dependencies.fetchBegin());
    const errorId = dependencies.idGenerator();

    return dependencies.fetch(email)
      .then(response => response.json())
      .then(user => {
        const clientUser = convertServerToViewUserModel(user);
        return dispatch(dependencies.success(clientUser));
      })
      .catch((error: Error) => dispatch(dependencies.error(errorId, error)));
  };

export const fetchUser = fetchUserFactory(fetchUserFactoryDependencies);
