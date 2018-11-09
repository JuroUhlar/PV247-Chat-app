import * as Immutable from 'immutable';
import {IMessage} from '../../models/Message';
import {MESSAGE_CREATE, MESSAGE_DISLIKE, MESSAGE_LIKE} from '../../constants/actionTypes';
import {messageReducer} from './messageReducer';
import {getInitialMessages} from '../../utils/getInitialMessages';

const initialState = getInitialMessages();

export const messagesReducer = (prevState: Immutable.Map<Uuid, IMessage> = initialState, action: Action):
  Immutable.Map<Uuid, IMessage> => {
  switch (action.type) {
    case MESSAGE_CREATE:
      return prevState;

    case MESSAGE_DISLIKE:
    case MESSAGE_LIKE: {
      const {messaeId} = action.payload;
      const currentMessage = prevState.get(messaeId);
      const newState = prevState.set(messaeId, messageReducer(currentMessage, action));

      return newState;
    }

    default:
      return prevState;
  }
};
