import {IUser} from '../../models/User';
import {getJane} from '../../utils/usersUtils';

const initialState = getJane();

export const userReducer = (prevState: IUser = initialState, action: Action) => {
  switch (action.type) {
    default:
      return prevState;
  }
};
