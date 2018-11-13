import * as Immutable from 'immutable';
import {MESSAGE_CREATE, MESSAGE_DELETE} from '../../shared/constants/actionTypes';
import {getInitialMessages} from '../utils/getInitialMessages';

const initialState = getInitialMessages().keySeq().toOrderedSet();

export const messageIdsReducer = (prevState: Immutable.OrderedSet<Uuid> = initialState, action: Action):
  Immutable.OrderedSet<Uuid> => {
  switch (action.type) {
    case MESSAGE_CREATE: {
      return prevState.add(action.payload.messageId);
    }

    case MESSAGE_DELETE: {
      return prevState.delete(action.payload.messageId);
    }

    default:
      return prevState;
  }
};
