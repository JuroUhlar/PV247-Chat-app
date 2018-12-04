import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import * as Immutable from 'immutable';
import * as uuid from 'uuid';
import {
  failToFetchAllUsers,
  requestAllUsers,
  succeedToFetchAllUsers
} from '../usersActionCreators';
import {
  SERVER_ROUTE,
  USERS_ROUTE
} from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';
import { convertServerToViewUserModel } from '../../utils/convertUserModels';
import {
  IUser,
  IUserServerModel
} from '../../models/User';

const fetchAllUsersFactoryDependencies = {
  fetchBegin: requestAllUsers,
  success: succeedToFetchAllUsers,
  error: failToFetchAllUsers,
  fetch: () => fetch(`${SERVER_ROUTE}${USERS_ROUTE}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('user'),
    },
  })
    .then(response => checkStatus(response)),
  idGenerator: uuid,
};

interface IFetchAllUsersFactoryDependencies {
  fetchBegin: () => Action;
  success: (json: object) => Action;
  error: (id: string, error: Error) => Action;
  fetch: () => Promise<Response>;
  idGenerator: () => string;
}

const fetchAllUsersFactory = (dependencies: IFetchAllUsersFactoryDependencies) =>
  (dispatch: Dispatch): Promise<Action> => {
    dispatch(dependencies.fetchBegin());
    const errorId = dependencies.idGenerator();
    let clientUsers = Immutable.Map<Uuid, IUser>();

    return dependencies.fetch()
      .then(response => response.json())
      .then(json => {
        const users = Array.from(json);
        users.forEach((user: IUserServerModel) => {
          const clientUser = convertServerToViewUserModel(user);
          clientUsers = clientUsers.set(clientUser.id, clientUser);
        });

        return dispatch(dependencies.success(clientUsers));
      })
      .catch((error: Error) => dispatch(dependencies.error(errorId, error)));
  };

export const fetchAllUsers = fetchAllUsersFactory(fetchAllUsersFactoryDependencies);
