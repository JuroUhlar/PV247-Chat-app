import * as Immutable from 'immutable';
import {IChannel} from './IChannel';

export interface IChannelsInfo {
  readonly channels: Immutable.Map<Uuid, IChannel>;
  readonly currentChannelId: Uuid;
}
