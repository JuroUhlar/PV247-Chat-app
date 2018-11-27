import * as Immutable from 'immutable';
import { MESSAGE_CREATE, MESSAGE_DELETE, MESSAGES_FETCH__SUCCESS } from '../../shared/constants/actionTypes';
import { IMessageServerModel } from '../models/Message';

const initialState = Immutable.OrderedSet<Uuid>();

export const messageIdsReducer = (prevState: Immutable.OrderedSet<Uuid> = initialState, action: Action):
  Immutable.OrderedSet<Uuid> => {
  switch (action.type) {
    case MESSAGES_FETCH__SUCCESS: {
      const receivedObjects = action.payload.messages;
      const messageIds = receivedObjects.map((value: IMessageServerModel) => value.id);

      return prevState.merge(messageIds);
    }

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
