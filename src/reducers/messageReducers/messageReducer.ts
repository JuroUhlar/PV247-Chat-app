import {MESSAGE_DELETE, MESSAGE_DISLIKE, MESSAGE_LIKE} from '../../constants/actionTypes';
import {IMessage, Message} from '../../models/Message';
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

    case MESSAGE_DELETE:
    default:
      return prevState;
  }
};
