import { combineReducers } from 'redux';
import { messageListingReducers } from './messageReducers/messageListingReducers';
import { usersInfoReducers } from './profile/usersInfoReducers';
import { channelsInfoReducers } from './channelsInfoReducer';

export const rootReducer = combineReducers({
  channelsInfo: channelsInfoReducers,
  messageListing: messageListingReducers,
  usersInfo: usersInfoReducers,
});
