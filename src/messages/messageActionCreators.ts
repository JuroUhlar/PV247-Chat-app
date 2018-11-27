import * as uuid from 'uuid';
import { MESSAGE_CREATE, MESSAGE_DELETE, MESSAGE_DISLIKE, MESSAGE_LIKE, MESSAGES_FETCH__FAILURE, MESSAGES_FETCH__REQUEST, MESSAGES_FETCH__SUCCESS } from '../shared/constants/actionTypes';

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

export const requestMessages = (): Action => ({
  type: MESSAGES_FETCH__REQUEST,
  payload: {},
});

export const succeedToFetchMessages = (json: object): Action => ({
  type: MESSAGES_FETCH__SUCCESS,
  payload: { messages: json },
});

export const failToFetchMessages = (id: string, error: Error): Action => ({
  type: MESSAGES_FETCH__FAILURE,
  payload: { id, errorMessage: error.message || 'Messages were not fetched' },
});
