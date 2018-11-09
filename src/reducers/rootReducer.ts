import { channelsReducer } from './channelsReducer';
import {combineReducers} from 'redux';
import {messagesReducer} from './messageReducers/messagesReducer';
import {loginStatusReducer} from './loginStatusReducer';

export const rootReducer = combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  loginStatus: loginStatusReducer,
});
