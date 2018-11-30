import * as Immutable from 'immutable';
import { IChannel, Channel } from '../models/Channel';
import { CHANNEL_CREATE, CHANNEL_UPDATE, CHANNEL_DELETE } from '../../shared/constants/actionTypes';
import { getInitialChannels } from '../utils/getInitialChannels';

const initialState = getInitialChannels();

export const channelsReducer = (prevState: Immutable.Map<Uuid, IChannel> = initialState, action: Action): Immutable.Map<Uuid, IChannel> => {
  switch (action.type) {
    case CHANNEL_CREATE: {
      const { id, name, users } = action.payload;
      const newChannel = new Channel({
        id,
        name,
        users,
      });

      return prevState.set(newChannel.id, newChannel);
    }

    case CHANNEL_UPDATE: {
      const { id, name, users } = action.payload;
      const newChannel = new Channel({
        id,
        name,
        users
      });

      return prevState.set(id, newChannel);
    }

    case CHANNEL_DELETE: {
      return prevState.delete(action.payload.id);
    }

    default:
      return prevState;
  }
};
