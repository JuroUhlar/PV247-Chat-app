import * as Immutable from 'immutable';
import {IUser} from '../../models/User';
import {getInitialUsers} from '../../utils/getInitialUsers';

const initialState = getInitialUsers();

export const usersReducer = (prevState: Immutable.Map<Uuid, IUser> = initialState, action: Action)
  : Immutable.Map<Uuid, IUser> => {
  switch (action.type) {
    default:
      return prevState;
  }
};
