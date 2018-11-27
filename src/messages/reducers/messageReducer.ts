import { MESSAGE_CREATE, MESSAGE_DISLIKE, MESSAGE_LIKE, MESSAGES_POST__SUCCESS } from '../../shared/constants/actionTypes';
import { IMessage, IMessageServerModel, Message, MessagePopularity } from '../models/Message';
import {messagePopularityReducer} from './messagePopularityReducer';
import { convertServerToViewMessageModel } from '../utils/convertMessageModels';

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
      const {id, authorId, text, channelId} = action.payload;
      const newMessage = new Message({
        messageId: id,
        text,
        timeStamp: Date.now(),
        authorId,
        channelId,
        popularity: new MessagePopularity(),
      });

      return newMessage;
    }

    case MESSAGES_POST__SUCCESS: {
      const message: IMessageServerModel = action.payload.message;
      const viewMessage = convertServerToViewMessageModel(message);

      return prevState.with(viewMessage);
    }

    default:
      return prevState;
  }
};
