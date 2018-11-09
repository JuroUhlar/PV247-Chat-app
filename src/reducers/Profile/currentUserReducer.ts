import {USER_LOG_IN, USER_LOG_OUT} from '../../constants/actionTypes';
import {janeId} from '../../utils/getInitialUsers';

const initialState = janeId;

export const currentUserReducer = (prevState: Uuid | null = initialState, action: Action): Uuid | null => {
  switch (action.type) {
    case USER_LOG_IN: {
      return action.payload.userId;
    }

    case USER_LOG_OUT: {
      return null;
    }

    default:
      return prevState;
  }
};
