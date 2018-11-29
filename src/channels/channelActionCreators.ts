import * as uuid from 'uuid';
import { CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_UPDATE, CHANNEL_SELECT } from '../shared/constants/actionTypes';

export const createChannel = (name: string): Action => ({
  type: CHANNEL_CREATE,
  payload: {
    name,
    id: uuid(),
  }
});

export const updateChannel = (id: Uuid, name: string): Action => ({
  type: CHANNEL_UPDATE,
  payload: {
    id,
    name
  }
});

export const deleteChannel = (id: Uuid): Action => ({
  type: CHANNEL_DELETE,
  payload: {
    id
  }
});

export const selectChannel = (id: Uuid): Action => ({
  type: CHANNEL_SELECT,
  payload: {
    id
  }
});
