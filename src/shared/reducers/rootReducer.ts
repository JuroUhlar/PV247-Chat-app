import { channelsReducer } from '../../channels/reducers/channelsReducer';
import {combineReducers} from 'redux';
import {messageListingReducers} from '../../messages/reducers/messageListingReducers';
import {usersInfoReducers} from '../../profile/reducers/usersInfoReducers';

export const rootReducer = combineReducers({
  channels: channelsReducer,
  messageListing: messageListingReducers,
  usersInfo: usersInfoReducers,
});
