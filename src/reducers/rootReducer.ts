import { channelsReducer } from './channelsReducer';
import {combineReducers} from 'redux';
import {loginStatusReducer} from './loginStatusReducer';
import {messageListingReducers} from './messageReducers/messageListingReducers';

export const rootReducer = combineReducers({
  channels: channelsReducer,
  messageListing: messageListingReducers,
  loginStatus: loginStatusReducer,
});
