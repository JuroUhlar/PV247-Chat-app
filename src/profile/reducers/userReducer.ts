import {
  IUser,
  User
} from '../models/User';
import {
  USER_CHANGE_AVATAR,
  USER_CHANGE_USERNAME
} from '../../shared/constants/actionTypes';

// const initialState = getJane();
const initialState = new User();

export const userReducer = (prevState: IUser = initialState, action: Action) => {
  switch (action.type) {
    case USER_CHANGE_USERNAME: {
      const newState = prevState.with({ name: action.payload.name });

      return newState;
    }

    case USER_CHANGE_AVATAR: {
      const newState = prevState.with({ avatarPath: action.payload.avatarPath });

      return newState;
    }

    default:
      return prevState;
  }
};
