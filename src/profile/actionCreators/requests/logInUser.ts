import { Dispatch } from 'redux';
import {
  failToLogIn,
  logIn,
  succeedToLogIn
} from '../usersActionCreators';
import { fetchUser } from './fetchUser';
import * as uuid from 'uuid';

const logInUserFactoryDependencies = {
  logInBegin: logIn,
  fetchUser,
  success: succeedToLogIn,
  error: failToLogIn,
  idGenerator: uuid,
};

interface ILogInUserFactoryDependencies {
  logInBegin: (email: string) => Action;
  fetchUser: (email: string) => (dispatch: Dispatch) => Promise<Action>;
  success: (json: object) => Action;
  error: (id: string, error: Error) => Action;
  idGenerator: () => string;
}

const logInUserFactory = (dependencies: ILogInUserFactoryDependencies) => (email: string) =>
  (dispatch: Dispatch): Promise<Action> => {
    dispatch(dependencies.logInBegin(email));
    const errorId = dependencies.idGenerator();

    return dependencies.fetchUser(email)(dispatch)
      .then( response => dispatch(dependencies.success(response.payload.user)))
      .catch((error: Error) => dispatch(dependencies.error(errorId, error)));
  };

export const logInUser = logInUserFactory(logInUserFactoryDependencies);
