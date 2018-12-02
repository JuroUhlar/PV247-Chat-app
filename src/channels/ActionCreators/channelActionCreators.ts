import * as uuid from 'uuid';
import {
  CHANNEL_DELETE, CHANNEL_UPDATE, CHANNEL_SELECT,
  CHANNELS_FETCH__REQUEST, CHANNELS_FETCH__SUCCESS, CHANNELS_FETCH__FAILURE,
  CHANNELS_POST__SUCCESS, CHANNELS_POST__FAILURE,
  CHANNELS_DELETE__SUCCESS, CHANNELS_DELETE__FAILURE, CHANNELS_UPDATE__SUCCESS, CHANNELS_UPDATE__FAILURE
} from '../../shared/constants/actionTypes';
import { createChannelFactory } from './createChannelFactory';
import * as Immutable from 'immutable';

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
  payload: { id, errorMessage: error.message || 'Channels were not fetched' },
});

// Posting a channel

export const createChannel = createChannelFactory(uuid);

export const succeedToPostChannel = (json: object): Action => ({
  type: CHANNELS_POST__SUCCESS,
  payload: { channel: json },
});

export const failToPostChannel = (id: string, error: Error): Action => ({
  type: CHANNELS_POST__FAILURE,
  payload: { id, errorMessage: error.message || 'Channel was not created' },
});

// Deleting a channel

export const deleteChannel = (id: Uuid): Action => ({
  type: CHANNEL_DELETE,
  payload: {
    id
  }
});

export const succeedToDeleteChannel = (): Action => ({
  type: CHANNELS_DELETE__SUCCESS,
  payload: {},
});

export const failToDeleteChannel = (id: string, error: Error): Action => ({
  type: CHANNELS_DELETE__FAILURE,
  payload: { id, errorMessage: error.message || 'Channel was not deleted' },
});

// Updating a channel

export const updateChannel = (id: Uuid, name?: string, users?: Immutable.List<Uuid>): Action => ({
  type: CHANNEL_UPDATE,
  payload: {
    id,
    name,
    users,
  }
});

export const succeedToUpdateChannel = (json: object): Action => ({
  type: CHANNELS_UPDATE__SUCCESS,
  payload: { channel: json },
});

export const failToUpdateChannel = (id: string, error: Error): Action => ({
  type: CHANNELS_UPDATE__FAILURE,
  payload: { id, errorMessage: error.message || 'Channel was not updated' },
});


// Other

export const selectChannel = (id: Uuid): Action => ({
  type: CHANNEL_SELECT,
  payload: {
    id
  }
});
