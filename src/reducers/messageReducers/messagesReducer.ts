import * as Immutable from 'immutable';
import {IMessage} from '../../models/Message';
import {MESSAGE_CREATE, MESSAGE_DELETE, MESSAGE_DISLIKE, MESSAGE_LIKE} from '../../constants/actionTypes';
import {messageReducer} from './messageReducer';
import {getInitialMessages} from '../../utils/getInitialMessages';

const initialState = getInitialMessages();

export const messagesReducer = (prevState: Immutable.Map<Uuid, IMessage> = initialState, action: Action):
  Immutable.Map<Uuid, IMessage> => {
  switch (action.type) {
    case MESSAGE_CREATE: {
      const newMessage = messageReducer(undefined, action);
      return prevState.set(action.payload.messageId, newMessage);
    }

    case MESSAGE_DELETE: {
      return prevState.delete(action.payload.messageId);
    }

    case MESSAGE_DISLIKE:
    case MESSAGE_LIKE: {
      const {messageId} = action.payload;
      const currentMessage = prevState.get(messageId);
      const newMessage = messageReducer(currentMessage, action);
      const newState = prevState.set(messageId, newMessage);

      return newState;
    }

    default:
      return prevState;
  }
};
