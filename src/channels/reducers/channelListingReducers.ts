import {combineReducers} from 'redux';
import {channelsReducer} from './channelsReducer';
import { selectedChannelReducer } from './selectedChannelReducer';

export const channelListingReducers = combineReducers({
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
});
