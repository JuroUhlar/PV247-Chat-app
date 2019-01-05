import { CHANNEL_SELECT, CHANNELS_ORDER_FETCH__SUCCESS } from '../../shared/constants/actionTypes';

const initialState = 'no channel selected';

export const selectedChannelReducer = (prevState: Uuid = initialState, action: Action): Uuid => {
  switch (action.type) {
    case CHANNEL_SELECT: {
      const { id } = action.payload;
      return id;
    }

    case CHANNELS_ORDER_FETCH__SUCCESS: {
      const id = action.payload.channelIds[0];
      return id;
    }

    default:
      return prevState;
  }
};
