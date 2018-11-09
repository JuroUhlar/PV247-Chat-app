import { channelsReducer } from './channelsReducer';
import {combineReducers} from 'redux';
import {messagesReducer} from './messageReducers/messagesReducer';

export const rootReducer = combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
});
