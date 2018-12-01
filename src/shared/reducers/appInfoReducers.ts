import {combineReducers} from 'redux';
import { isLoadingReducer } from './isLoadingReducer';
import { isLoadingChannelsReducer } from './isLoadingChannelsReducer';

export const appInfoReducers = combineReducers({
  isLoading: isLoadingReducer,
  isLoadingChannels: isLoadingChannelsReducer,
});
