import { IState } from '../models/IState';
import { channelsReducer } from './channelsReducer';

export const rootReducer = (prevState = {} as IState, action: Action): IState => ({
  channels: channelsReducer(prevState.channels, action),
});
