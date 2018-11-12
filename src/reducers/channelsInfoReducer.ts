import {combineReducers} from 'redux';
import {currentChannelReducer} from './currentChannelReducer';
import {channelsReducer} from './channelsReducer';

export const channelsInfoReducers = combineReducers({
  currentChannelId: currentChannelReducer,
  channels: channelsReducer,
});
