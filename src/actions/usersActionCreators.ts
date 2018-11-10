import {USER_LOG_IN, USER_LOG_OUT, USERNAME_CHANGES_SAVE} from '../constants/actionTypes';

export const logIn = (userId: Uuid): Action => ({
  type: USER_LOG_IN,
  payload: {userId},
});

export const logOut = (userId: Uuid): Action => ({
  type: USER_LOG_OUT,
  payload: {userId},
});

export const saveChangesToUsername = (id: string, name: string): Action => ({
  type: USERNAME_CHANGES_SAVE,
  payload: { id, name },
});
