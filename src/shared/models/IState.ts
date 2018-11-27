import * as Immutable from 'immutable';
import { IChannel } from '../../channels/models/IChannel';
import {IMessageListing} from '../../messages/models/IMessageListing';
import {IUsersInfo} from '../../profile/models/IUsersInfo';
import { IAppInfo } from './IAppInfo';

export interface IState {
  channels: Immutable.List<IChannel>;
  usersInfo: IUsersInfo;
  messageListing: IMessageListing;
  appInfo: IAppInfo;
}
