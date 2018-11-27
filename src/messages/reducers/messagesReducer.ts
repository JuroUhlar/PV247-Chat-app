import * as Immutable from 'immutable';
import { IMessage, IMessageServerModel } from '../models/Message';
import { MESSAGE_CREATE, MESSAGE_DELETE, MESSAGE_DISLIKE, MESSAGE_LIKE, MESSAGES_FETCH__SUCCESS } from '../../shared/constants/actionTypes';
import { messageReducer } from './messageReducer';
import { convertServerToViewMessageModel } from '../utils/convertMessageModels';

const initialState = Immutable.Map<Uuid, IMessage>();

export const messagesReducer = (prevState: Immutable.Map<Uuid, IMessage> = initialState, action: Action):
  Immutable.Map<Uuid, IMessage> => {
  switch (action.type) {
    case MESSAGES_FETCH__SUCCESS: {
      const messages = action.payload.messages
        .map((value: IMessageServerModel) => [value.id, convertServerToViewMessageModel(value)]);
      return prevState.merge(messages);
    }

    case MESSAGE_CREATE: {
      const newMessage = messageReducer(undefined, action);
      return prevState.set(action.payload.messageId, newMessage);
    }

    case MESSAGE_DELETE: {
      return prevState.delete(action.payload.messageId);
    }

    case MESSAGE_DISLIKE:
    case MESSAGE_LIKE: {
      const { messageId } = action.payload;
      const currentMessage = prevState.get(messageId);
      const newMessage = messageReducer(currentMessage, action);
      const newState = prevState.set(messageId, newMessage);

      return newState;
    }

    default:
      return prevState;
  }
};
