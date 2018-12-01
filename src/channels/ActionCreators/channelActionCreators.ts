import * as uuid from 'uuid';
import { CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_UPDATE, CHANNEL_SELECT, CHANNELS_FETCH__REQUEST, CHANNELS_FETCH__SUCCESS, CHANNELS_FETCH__FAILURE } from '../../shared/constants/actionTypes';
import * as Immutable from 'immutable';

// Server actions

export const requestChannels = (): Action => ({
  type: CHANNELS_FETCH__REQUEST,
  payload: {},
});

export const succeedToFetchChannels = (json: object): Action => ({
  type: CHANNELS_FETCH__SUCCESS,
  payload: { messages: json },
});

export const failToFetchChannels = (id: string, error: Error): Action => ({
  type: CHANNELS_FETCH__FAILURE,
  payload: { id, errorMessage: error.message || 'Messages were not fetched' },
});

// Redux actions

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
