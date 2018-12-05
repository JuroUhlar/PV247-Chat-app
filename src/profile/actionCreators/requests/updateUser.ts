import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import {
  SERVER_ROUTE,
  USERS_ROUTE
} from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';
import {
  IUser,
  IUserData
} from '../../models/User';
import { convertViewToServerUserModel } from '../../utils/convertUserModels';
import {
  changeAvatar,
  failToUpdateUser,
  saveChangesToUsername,
  succeedToUpdateUser
} from '../usersActionCreators';
import { getBearer } from '../../../shared/utils/getBearer';

interface IUpdateUserFactoryDependencies {
  readonly success: (json: object) => Action;
  readonly error: (id: Uuid, error: Error) => Action;
  readonly update: (body: Partial<IUserData>) => Promise<Response>;
  readonly updateAvatarPathBegin: (id: Uuid, path: string) => Action;
  readonly updateUsernameBegin: (id: Uuid, name: string) => Action;
}

export interface IUserUpdateData {
  readonly user: IUser;
  readonly updatedUsername?: string;
  readonly updatedAvatarPath?: string;
}

const updateUserFactoryDependencies = {
  updateAvatarPathBegin: changeAvatar,
  updateUsernameBegin: saveChangesToUsername,
  success: succeedToUpdateUser,
  error: failToUpdateUser,
  update: (body: Partial<IUserData>) => fetch(`${SERVER_ROUTE}${USERS_ROUTE}${body.email}`, {
    method: 'PUT',
    body: JSON.stringify(convertViewToServerUserModel(body)),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      accept: 'application/json',
      authorization: getBearer(),
    },
  })
    .then(response => checkStatus(response))
};

const updateUserFactory = (dependencies: IUpdateUserFactoryDependencies) => (data: IUserUpdateData) =>
  (dispatch: Dispatch): Promise<Action> => {
    const { user, updatedAvatarPath, updatedUsername } = data;
    let updatedUser = user;
    if (updatedUsername) {
      dispatch(dependencies.updateUsernameBegin(user.id, updatedUsername));
      updatedUser = updatedUser.with({ name: updatedUsername });
    }
    if (updatedAvatarPath) {
      dispatch(dependencies.updateAvatarPathBegin(user.id, updatedAvatarPath));
      updatedUser = updatedUser.with({ avatarPath: updatedAvatarPath });
    }

    return dependencies.update(updatedUser)
      .then(response => response.json())
      .then(usr => dispatch(dependencies.success(usr)))
      .catch((error: Error) => dispatch(dependencies.error(user.id, error)));
  };

export const updateUserRequest = updateUserFactory(updateUserFactoryDependencies);
