import {MESSAGE_DELETE, MESSAGE_DISLIKE, MESSAGE_EDIT, MESSAGE_LIKE} from '../../constants/actionTypes';
import {IMessage, Message} from '../../models/Message';

export const messageReducer = (prevState: IMessage = new Message(), action: Action): IMessage => {
  switch (action.type) {
    case MESSAGE_DISLIKE: {
      const likes = prevState.likes;
      const newLikes = likes.delete(action.payload.userId);
      const newState = prevState.with({likes: newLikes});
      return newState;
    }

    case MESSAGE_LIKE: {
      const likes = prevState.likes;
      const newLikes = likes.push(action.payload.userId);
      const newState = prevState.with({likes: newLikes});
      return newState;
    }

    case MESSAGE_EDIT: {
      const text = action.payload;
      const newState = prevState.with(text);
      return newState;
    }

    case MESSAGE_DELETE:
    default:
      return prevState;
  }
};
