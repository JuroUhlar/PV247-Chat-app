import {IUser} from '../../models/User';
import {getJane} from '../../utils/usersUtils';
import {USER_CHANGE_AVATAR, USER_CHANGE_USERNAME} from '../../constants/actionTypes';

const initialState = getJane();

export const userReducer = (prevState: IUser = initialState, action: Action) => {
  switch (action.type) {
    case USER_CHANGE_USERNAME: {
      const newState = prevState.with({name: action.payload.name});

      return newState;
    }

    case USER_CHANGE_AVATAR: {
      const newState = prevState.with({avatarPath: action.payload.avatarPath});

      return newState;
    }

    default:
      return prevState;
  }
};
