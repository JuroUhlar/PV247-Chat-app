import { channelsReducer } from './channelsReducer';
import {combineReducers} from 'redux';
import {messageListingReducers} from './messageReducers/messageListingReducers';
import {usersInfoReducer} from './Profile/usersInfoReducer';

export const rootReducer = combineReducers({
  channels: channelsReducer,
  messageListing: messageListingReducers,
  usersInfo: usersInfoReducer,
});
