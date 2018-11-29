import * as uuid from 'uuid';
import { CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_UPDATE, CHANNEL_SELECT } from '../shared/constants/actionTypes';
import { IChannel } from './models/Channel';

export const createChannel = (channel: IChannel): Action => ({
  type: CHANNEL_CREATE,
  payload: {
    id: uuid(),
    name: channel.name,
    users: channel.users,
  }
});

export const updateChannel = (channel: IChannel): Action => ({
  type: CHANNEL_UPDATE,
  payload: {
    id: channel.id,
    name: channel.name,
    users: channel.users,
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
