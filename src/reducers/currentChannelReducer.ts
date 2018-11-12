import { CHANNEL_GO_TO } from '../constants/actionTypes';
import { randomChannelId } from '../utils/getInitialChannels';

const initialState = randomChannelId;

export const currentChannelReducer = (prevState: Uuid | null = initialState, action: Action): Uuid | null => {
  switch (action.type) {
    case CHANNEL_GO_TO: {
      return action.payload.id;
    }

    default:
      return prevState;
  }
};
