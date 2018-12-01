import {
  USER_CHANGE_AVATAR,
  USER_CHANGE_USERNAME,
  USER_LOG_IN,
  USER_LOG_OUT,
  USER_UPDATE__FAILURE,
  USER_UPDATE__SUCCESS,
} from '../../shared/constants/actionTypes';

export const logIn = (userId: Uuid): Action => ({
  type: USER_LOG_IN,
  payload: { userId },
});

export const logOut = (userId: Uuid): Action => ({
  type: USER_LOG_OUT,
  payload: { userId },
});

export const saveChangesToUsername = (id: string, name: string): Action => ({
  type: USER_CHANGE_USERNAME,
  payload: { id, name },
});

export const changeAvatar = (id: string, avatarPath: string): Action => ({
  type: USER_CHANGE_AVATAR,
  payload: { id, avatarPath },
});

export const succeedToUpdateUser = (json: object): Action => ({
  type: USER_UPDATE__SUCCESS,
  payload: { user: json },
});

export const failToUpdateUser = (id: string, error: Error): Action => ({
  type: USER_UPDATE__FAILURE,
  payload: { id, errorMessage: error.message || 'User was not updated' },
});
