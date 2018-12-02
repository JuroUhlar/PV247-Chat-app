import {
  USER_LOG_IN__SUCCESS,
  USER_LOG_OUT
} from '../../shared/constants/actionTypes';

const initialState = null;

export const currentUserReducer = (prevState: Uuid | null = initialState, action: Action): Uuid | null => {
  switch (action.type) {
    case USER_LOG_IN__SUCCESS: {
      return action.payload.user.id;
    }

    case USER_LOG_OUT: {
      return null;
    }

    default:
      return prevState;
  }
};
