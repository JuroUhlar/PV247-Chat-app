import {
  USER_FETCH__FAILURE,
  USER_FETCH__REQUEST,
  USER_FETCH__SUCCESS,
  USER_CHANGE_AVATAR,
  USER_CHANGE_USERNAME,
  USER_LOG_IN,
  USER_LOG_OUT,
  USER_UPDATE__FAILURE,
  USER_UPDATE__SUCCESS,
  USERS_ALL_FETCH__FAILURE,
  USERS_ALL_FETCH__SUCCESS,
  USERS_ALL_FETCH__REQUEST,
  USER_LOG_IN__SUCCESS,
  USER_LOG_IN__FAILURE,
} from '../../shared/constants/actionTypes';

export const logIn = (userId: Uuid): Action => ({
  type: USER_LOG_IN,
  payload: { userId },
});

export const succeedToLogIn = (json: object): Action => ({
  type: USER_LOG_IN__SUCCESS,
  payload: { user: json },
});

export const failToLogIn = (id: string, error: Error): Action => ({
  type: USER_LOG_IN__FAILURE,
  payload: { id, errorMessage: error.message || 'Failed to log in' },
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

export const requestUser = (): Action => ({
  type: USER_FETCH__REQUEST,
  payload: {},
});

export const succeedToFetchUser = (json: object): Action => ({
  type: USER_FETCH__SUCCESS,
  payload: { user: json },
});

export const failToFetchUser = (id: string, error: Error): Action => ({
  type: USER_FETCH__FAILURE,
  payload: { id, errorMessage: error.message || 'User was not fetched' },
});

export const requestAllUsers = (): Action => ({
  type: USERS_ALL_FETCH__REQUEST,
  payload: {},
});

export const succeedToFetchAllUsers = (json: object): Action => ({
  type: USERS_ALL_FETCH__SUCCESS,
  payload: { messages: json },
});

export const failToFetchAllUsers = (id: string, error: Error): Action => ({
  type: USERS_ALL_FETCH__FAILURE,
  payload: { id, errorMessage: error.message || 'Users were not fetched' },
});
