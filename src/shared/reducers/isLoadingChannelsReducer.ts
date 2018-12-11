import { CHANNELS_FETCH__REQUEST, CHANNELS_ORDER_FETCH__REQUEST, CHANNELS_ORDER_FETCH__FAILURE, CHANNELS_ORDER_FETCH__SUCCESS } from '../constants/actionTypes';

export const isLoadingChannelsReducer = (prevState: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case CHANNELS_FETCH__REQUEST: {
      return true;
    }
    case CHANNELS_ORDER_FETCH__REQUEST: {
      return true;
    }

    // case CHANNELS_FETCH__FAILURE:
    // case CHANNELS_FETCH__SUCCESS: {
    //   return false;
    // }

    case CHANNELS_ORDER_FETCH__FAILURE:
    case CHANNELS_ORDER_FETCH__SUCCESS: {
      return false;
    }

    default:
      return prevState;
  }
};
