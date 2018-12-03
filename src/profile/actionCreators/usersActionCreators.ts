import {
  UNAUTHENTICATE__SUCCESS,
  USER_CHANGE_AVATAR,
  USER_CHANGE_USERNAME,
  USER_FETCH__FAILURE,
  USER_FETCH__REQUEST,
  USER_FETCH__SUCCESS,
  USER_UPDATE__FAILURE,
  USER_UPDATE__SUCCESS,
  USERS_ALL_FETCH__FAILURE,
  USERS_ALL_FETCH__REQUEST,
  USERS_ALL_FETCH__SUCCESS,
} from '../../shared/constants/actionTypes';

export const logOut = (userId: Uuid): Action => ({
  type: UNAUTHENTICATE__SUCCESS,
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
