import {combineReducers} from 'redux';
import {messagesReducer} from './messagesReducer';
import {messageIdsReducer} from './messageIdsReducer';

export const messageListingReducers = combineReducers({
  messages: messagesReducer,
  messageIds: messageIdsReducer,
});
