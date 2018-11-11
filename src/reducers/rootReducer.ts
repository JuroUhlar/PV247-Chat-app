import { channelsReducer } from './channelsReducer';
import {combineReducers} from 'redux';
import {messageListingReducers} from './messageReducers/messageListingReducers';
import {usersInfoReducers} from './profile/usersInfoReducers';

export const rootReducer = combineReducers({
  channels: channelsReducer,
  messageListing: messageListingReducers,
  usersInfo: usersInfoReducers,
});
