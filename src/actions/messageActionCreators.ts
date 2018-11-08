import * as uuid from 'uuid';
import {
  MESSAGE_CREATE,
  MESSAGE_DELETE,
  MESSAGE_DISLIKE,
  MESSAGE_EDIT,
  MESSAGE_LIKE,
} from '../constants/actionTypes';

export const createMessage = (text: string, ownerId: Uuid): Action => ({
  type: MESSAGE_CREATE,
  payload: {
    ownerId,
    messageId: uuid(),
    text,
  }
});

export const updateMessage = (messageId: Uuid, text: string): Action => ({
  type: MESSAGE_EDIT,
  payload: {
    messageId,
    text,
  }
});

export const deleteMessage = (messageId: Uuid): Action => ({
  type: MESSAGE_DELETE,
  payload: {
    messageId,
  }
});

export const likeMessage = (messageId: Uuid): Action => ({
  type: MESSAGE_LIKE,
  payload: {
    messageId,
  }
});

export const dislikeMessage = (messageId: Uuid): Action => ({
  type: MESSAGE_DISLIKE,
  payload: {
    messageId,
  }
});
