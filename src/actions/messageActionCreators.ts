import * as uuid from 'uuid';
import {
  MESSAGE_CREATE,
  MESSAGE_DELETE,
  MESSAGE_DISLIKE,
  MESSAGE_LIKE,
} from '../constants/actionTypes';

export const createMessage = (text: string, authorId: Uuid, channelId: Uuid): Action => ({
  type: MESSAGE_CREATE,
  payload: {
    authorId,
    messageId: uuid(),
    text,
    channelId,
  }
});

export const deleteMessage = (messageId: Uuid): Action => ({
  type: MESSAGE_DELETE,
  payload: {
    messageId,
  }
});

export const likeMessage = (messageId: Uuid, userId: Uuid): Action => ({
  type: MESSAGE_LIKE,
  payload: {
    messageId,
    userId,
  }
});

export const dislikeMessage = (messageId: Uuid, userId: Uuid): Action => ({
  type: MESSAGE_DISLIKE,
  payload: {
    messageId,
    userId,
  }
});
