import {USER_LOG_IN, USER_LOG_OUT, USER_CHANGE_USERNAME, USER_CHANGE_AVATAR} from '../shared/constants/actionTypes';

export const logIn = (userId: Uuid): Action => ({
  type: USER_LOG_IN,
  payload: {userId},
});

export const logOut = (userId: Uuid): Action => ({
  type: USER_LOG_OUT,
  payload: {userId},
});

export const saveChangesToUsername = (id: string, name: string): Action => ({
  type: USER_CHANGE_USERNAME,
  payload: { id, name },
});

export const changeAvatar = (id: string, avatarPath: string): Action => ({
  type: USER_CHANGE_AVATAR,
  payload: { id, avatarPath },
});
