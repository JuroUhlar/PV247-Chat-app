import {USER_LOG_IN, USER_LOG_OUT} from '../constants/actionTypes';
// TODO Rename to useractions

export const logIn = (userId: Uuid): Action => ({
  type: USER_LOG_IN,
  payload: {userId},
});

export const logOut = (userId: Uuid): Action => ({
  type: USER_LOG_OUT,
  payload: {userId},
});
