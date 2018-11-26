import { MESSAGES_FETCH__FAILURE, MESSAGES_FETCH__REQUEST, MESSAGES_FETCH__SUCCESS } from '../constants/actionTypes';

export const isLoadingReducer = (prevState: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case MESSAGES_FETCH__REQUEST: {
      return true;
    }

    case MESSAGES_FETCH__FAILURE:
    case MESSAGES_FETCH__SUCCESS: {
      return false;
    }

    default:
      return prevState;
  }
};
