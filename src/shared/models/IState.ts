import {IMessageListing} from '../../messages/models/IMessageListing';
import {IUsersInfo} from '../../profile/models/IUsersInfo';
import { IAppInfo } from './IAppInfo';
import { IChannelListing } from '../../channels/models/IChannelListing';

export interface IState {
  channelListing: IChannelListing;
  messageListing: IMessageListing;
  usersInfo: IUsersInfo;
  appInfo: IAppInfo;
}
