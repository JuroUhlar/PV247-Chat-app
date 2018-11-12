import { IMessageListing } from './IMessageListing';
import { IUsersInfo } from './IUsersInfo';
import { IChannelsInfo } from './IChannelListing';

export interface IState {
  channelsInfo: IChannelsInfo;
  usersInfo: IUsersInfo;
  messageListing: IMessageListing;
}

