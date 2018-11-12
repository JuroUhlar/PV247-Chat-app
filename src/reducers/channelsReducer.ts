import * as Immutable from 'immutable';
import { Channel, IChannel } from '../models/IChannel';
import { CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_RENAME } from '../constants/actionTypes';
import { getInitialChannels } from '../utils/getInitialChannels';

const initialState = getInitialChannels();

export const channelsReducer = (prevState: Immutable.List<IChannel> = initialState, action: Action): Immutable.List<IChannel> => {
  switch (action.type) {
    case CHANNEL_CREATE: {
      const { id, name } = action.payload;
      const newChannel = new Channel({ id, name });

      return prevState.push(newChannel);
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
