import * as uuid from 'uuid';
import {
  CHANNEL_DELETE, CHANNEL_UPDATE, CHANNEL_SELECT,
  CHANNELS_FETCH__REQUEST, CHANNELS_FETCH__SUCCESS, CHANNELS_FETCH__FAILURE,
  CHANNELS_POST__SUCCESS, CHANNELS_POST__FAILURE
} from '../../shared/constants/actionTypes';
import * as Immutable from 'immutable';
import { createChannelFactory } from './createChannelFactory';

// Server actions

// Fetching channels

export const requestChannels = (): Action => ({
  type: CHANNELS_FETCH__REQUEST,
  payload: {},
});

export const succeedToFetchChannels = (json: object): Action => ({
  type: CHANNELS_FETCH__SUCCESS,
  payload: { channels: json },
});

export const failToFetchChannels = (id: string, error: Error): Action => ({
  type: CHANNELS_FETCH__FAILURE,
  payload: { id, errorMessage: error.message || 'Messages were not fetched' },
});

// Posting a channel

export const succeedToPostChannel = (json: object): Action => ({
  type: CHANNELS_POST__SUCCESS,
  payload: { channel: json },
});

export const failToPostChannel = (id: string, error: Error): Action => ({
  type: CHANNELS_POST__FAILURE,
  payload: { id, errorMessage: error.message || 'Channel was not created' },
});

// Redux actions

// export const createChannel = (name: string, users: Immutable.List<Uuid>): Action => ({
//   type: CHANNEL_CREATE,
//   payload: {
//     id: uuid(),
//     name,
//     users,
//   }
// });

export const createChannel = createChannelFactory(uuid);

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
