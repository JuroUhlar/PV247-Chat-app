import * as Immutable from 'immutable';
import { IUser } from '../models/User';
import {
  USER_CHANGE_AVATAR,
  USER_CHANGE_USERNAME,
  USERS_ALL_FETCH__SUCCESS
} from '../../shared/constants/actionTypes';
import { userReducer } from './userReducer';

const initialState = Immutable.Map<Uuid, IUser>();

export const usersReducer = (prevState: Immutable.Map<Uuid, IUser> = initialState, action: Action)
  : Immutable.Map<Uuid, IUser> => {
  switch (action.type) {
    case USERS_ALL_FETCH__SUCCESS: {
      const users = action.payload.users;
      return users;
    }

    case USER_CHANGE_AVATAR:
    case USER_CHANGE_USERNAME: {
      const currentUSer = prevState.get(action.payload.id);
      const editedUser = userReducer(currentUSer, action);
      const newState = prevState.set(action.payload.id, editedUser);

      return newState;
    }

    default:
      return prevState;
  }
};
