import {MESSAGE_CREATE, MESSAGE_DISLIKE, MESSAGE_LIKE} from '../../shared/constants/actionTypes';
import {IMessage, Message, MessagePopularity} from '../models/Message';
import {messagePopularityReducer} from './messagePopularityReducer';

export const messageReducer = (prevState: IMessage = new Message(), action: Action): IMessage => {
  switch (action.type) {
    case MESSAGE_LIKE:
    case MESSAGE_DISLIKE: {
      const {popularity} = prevState;
      const newPopularity = messagePopularityReducer(popularity, action);
      const newState = prevState.with({popularity: newPopularity});

      return newState;
    }

    case MESSAGE_CREATE: {
      const {messageId, authorId, text, channelId} = action.payload;
      const newMessage = new Message({
        messageId,
        text,
        timeStamp: Date.now(),
        authorId,
        channelId,
        popularity: new MessagePopularity(),
      });

      return newMessage;
    }

    default:
      return prevState;
  }
};
