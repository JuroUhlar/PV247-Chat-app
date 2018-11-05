import * as uuid from 'uuid';
import { CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_RENAME } from '../constants/actionTypes';

export const createChannel = (name: string): Action => ({
  type: CHANNEL_CREATE,
  payload: {
    name,
    id: uuid(),
  }
});

export const updateItem = (id: Uuid, name: string): Action => ({
  type: CHANNEL_RENAME,
  payload: {
    id,
    name
  }
});

export const deleteItem = (id: Uuid): Action => ({
  type: CHANNEL_DELETE,
  payload: {
    id
  }
});
