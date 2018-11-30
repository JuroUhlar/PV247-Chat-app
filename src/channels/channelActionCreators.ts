import * as uuid from 'uuid';
import { CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_UPDATE, CHANNEL_SELECT } from '../shared/constants/actionTypes';
import * as Immutable from 'immutable';

export const createChannel = (name: string, users: Immutable.List<Uuid>): Action => ({
  type: CHANNEL_CREATE,
  payload: {
    id: uuid(),
    name,
    users,
  }
});

export const updateChannel = (id: Uuid, name?: string, users?: Immutable.List<Uuid>): Action => ({
  type: CHANNEL_UPDATE,
  payload: {
    id,
    name,
    users,
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
