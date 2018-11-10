import * as Immutable from 'immutable';
import { IChannel } from './IChannel';
import {IMessageListing} from './IMessageListing';
import {IUsersInfo} from './IUsersInfo';

export interface IState {
  channels: Immutable.List<IChannel>;
  usersInfo: IUsersInfo;
  messageListing: IMessageListing;
}

