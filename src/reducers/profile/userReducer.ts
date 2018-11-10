import {IUser} from '../../models/User';
import {getJane} from '../../utils/usersUtils';
import {USERNAME_CHANGES_SAVE} from '../../constants/actionTypes';

const initialState = getJane();

export const userReducer = (prevState: IUser = initialState, action: Action) => {
  switch (action.type) {
    case USERNAME_CHANGES_SAVE: {
      const newState = prevState.with({name: action.payload.name});

      return newState;
    }

    default:
      return prevState;
  }
};
