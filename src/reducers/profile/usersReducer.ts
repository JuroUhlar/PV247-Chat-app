import * as Immutable from 'immutable';
import {IUser} from '../../models/User';
import {getInitialUsers} from '../../utils/usersUtils';
import {USERNAME_CHANGES_SAVE} from '../../constants/actionTypes';
import {userReducer} from './userReducer';

const initialState = getInitialUsers();

export const usersReducer = (prevState: Immutable.Map<Uuid, IUser> = initialState, action: Action)
  : Immutable.Map<Uuid, IUser> => {
  switch (action.type) {
    case USERNAME_CHANGES_SAVE: {
      const currentUSer = prevState.get(action.payload.id);
      const editedUser = userReducer(currentUSer, action);
      const newState = prevState.set(action.payload.id, editedUser);

      return newState;
    }

    default:
      return prevState;
  }
};
