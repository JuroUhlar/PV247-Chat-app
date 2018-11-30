import * as Immutable from 'immutable';
import { MESSAGE_CREATE, MESSAGE_DELETE, MESSAGES_FETCH__SUCCESS, MESSAGES_POST__SUCCESS } from '../../shared/constants/actionTypes';
import { IMessageServerModel } from '../models/Message';

const initialState = Immutable.OrderedSet<Uuid>();

export const messageIdsReducer = (prevState: Immutable.OrderedSet<Uuid> = initialState, action: Action):
  Immutable.OrderedSet<Uuid> => {
  switch (action.type) {
    case MESSAGES_FETCH__SUCCESS: {
      const receivedObjects = action.payload.messages;
      const messageIdsInCorrectOrder = receivedObjects
        .map((value: IMessageServerModel) => value && value.id)
        .reverse();

      return Immutable.OrderedSet<Uuid>(messageIdsInCorrectOrder);
    }

    case MESSAGE_CREATE: {
      return prevState.add(action.payload.id);
    }

    case MESSAGES_POST__SUCCESS: {
      const message: IMessageServerModel = action.payload.message;
      const oldId = message.customData.clientId;
      const serverId = message.id;

      return prevState
        .map((id: Uuid) => (id === oldId) ?  serverId : id)
        .toOrderedSet();
    }

    case MESSAGE_DELETE: {
      return prevState.delete(action.payload.messageId);
    }

    default:
      return prevState;
  }
};
