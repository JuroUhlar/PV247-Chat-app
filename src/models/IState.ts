import * as Immutable from 'immutable';
import { IChannel } from './IChannel';
import {IMessageListing} from './IMessageListing';
// import { IUser } from './IUser';

export interface IState {
  channels: Immutable.List<IChannel>;
  // users: Immutable.List<IUser>;
  messageListing: IMessageListing;
  loginStatus: boolean;
}

