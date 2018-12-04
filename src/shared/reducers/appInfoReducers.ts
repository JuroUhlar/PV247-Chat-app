import {combineReducers} from 'redux';
import { isLoadingReducer } from './isLoadingReducer';
import { isLoadingChannelsReducer } from './isLoadingChannelsReducer';
import { isLoadingUsersReducer } from '../../profile/reducers/isLoadingUsersReducer';

export const appInfoReducers = combineReducers({
  isLoading: isLoadingReducer,
  isLoadingChannels: isLoadingChannelsReducer,
  isLoadingUsers: isLoadingUsersReducer,
});
