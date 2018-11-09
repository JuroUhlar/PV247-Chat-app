import * as Immutable from 'immutable';
import { IChannel } from '../models/IChannel';
import { CHANNEL_CREATE, CHANNEL_RENAME, CHANNEL_DELETE } from '../constants/actionTypes';
import {getInitialChannels} from '../utils/getInitialChannels';

const initialState = getInitialChannels();

export const channelsReducer = (prevState: Immutable.List<IChannel> = initialState, action: Action): Immutable.List<IChannel> => {
  switch (action.type) {
    case CHANNEL_CREATE: {
      const { id, name } = action.payload;

      return prevState.push({ id, name, users: Immutable.List([]) });
    }

    case CHANNEL_RENAME: {
      const { id, name } = action.payload;
      const index = prevState.findIndex((channel: IChannel) => channel.id === id);
      const oldChannel = prevState.get(index);

      return prevState.set(index, { ...oldChannel, name });
    }

    case CHANNEL_DELETE: {
      const { id } = action.payload;
      const index = prevState.findIndex((channel: IChannel) => channel.id === id);
      return prevState.remove(index);
    }

    default:
      return prevState;
  }
};
