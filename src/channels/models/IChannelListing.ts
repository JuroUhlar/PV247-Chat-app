import * as Immutable from 'immutable';
import { IChannel } from './IChannel';

export interface IChannelListing {
  readonly channels: Immutable.Map<Uuid, IChannel>;
  readonly channelIds: Immutable.OrderedSet<Uuid>;
}

