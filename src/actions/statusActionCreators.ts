import {STATUS_LOG_IN, STATUS_LOG_OUT} from '../constants/actionTypes';

export const logIn = (): Action => ({
  type: STATUS_LOG_IN,
    payload: { loggedIn: true},
});

export const logOut = (): Action => ({
  type: STATUS_LOG_OUT,
    payload: { loggedIn: false},
});
