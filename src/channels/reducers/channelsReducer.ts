import * as Immutable from 'immutable';
import { IChannel, Channel } from '../models/IChannel';
import { CHANNEL_CREATE, CHANNEL_RENAME, CHANNEL_DELETE } from '../../shared/constants/actionTypes';
import {getInitialChannels} from '../utils/getInitialChannels';

const initialState = getInitialChannels();

export const channelsReducer = (prevState: Immutable.Map<Uuid, IChannel> = initialState, action: Action): Immutable.Map<Uuid, IChannel> => {
  switch (action.type) {
    case CHANNEL_CREATE: {
      const { id, name } = action.payload;
      const newChannel = new Channel({
        id,
        name,
        users : Immutable.List([])
      });

      return prevState.set(newChannel.id, newChannel);
    }

    case CHANNEL_RENAME: {
      const { id, name } = action.payload;
      // const oldChannel = prevState.get(id);
      const newChannel = new Channel({
        id,
        name
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
