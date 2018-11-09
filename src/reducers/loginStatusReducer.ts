import {STATUS_LOG_IN, STATUS_LOG_OUT} from '../constants/actionTypes';

export const loginStatusReducer = (prevState: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case STATUS_LOG_IN: {
      return true;
    }

    case STATUS_LOG_OUT: {
      return false;
    }

    default:
      return prevState;
  }
};
