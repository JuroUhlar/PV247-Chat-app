import * as Immutable from 'immutable';
import { CHANNEL_CREATE, CHANNEL_DELETE } from '../../shared/constants/actionTypes';
import { getInitialChannels } from '../utils/getInitialChannels';


const initialState = getInitialChannels().keySeq().toOrderedSet();

export const channelIdsReducer = (prevState: Immutable.OrderedSet<Uuid> = initialState, action: Action):
  Immutable.OrderedSet<Uuid> => {
  switch (action.type) {

    case CHANNEL_CREATE: {
      return prevState.add(action.payload.id);
    }

    case CHANNEL_DELETE: {
      return prevState.delete(action.payload.id);
    }

    default:
      return prevState;
  }
};
