import {combineReducers} from 'redux';
import {channelsReducer} from './channelsReducer';

export const channelListingReducers = combineReducers({
  channels: channelsReducer,
});
