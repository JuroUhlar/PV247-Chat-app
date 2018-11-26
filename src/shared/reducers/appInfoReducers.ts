import {combineReducers} from 'redux';
import { isLoadingReducer } from './isLoadingReducer';

export const appInfoReducers = combineReducers({
  isLoading: isLoadingReducer,
});
