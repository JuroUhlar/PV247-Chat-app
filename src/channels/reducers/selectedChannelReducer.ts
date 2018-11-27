import { CHANNEL_SELECT } from '../../shared/constants/actionTypes';
import { getInitialChannels } from '../utils/getInitialChannels';

const initialState = getInitialChannels().first().id;

export const selectedChannelReducer = (prevState: Uuid = initialState, action: Action): Uuid => {
  switch (action.type) {
    case CHANNEL_SELECT: {
      const { id } = action.payload;
      return id;
    }

    default:
      return prevState;
  }
};
