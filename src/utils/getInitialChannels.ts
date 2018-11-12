import * as Immutable from 'immutable';
import { Channel, IChannel } from '../models/IChannel';

export const generalChannelId = '788467fa-10b2-43bc-81dd-fc9f53dcd5a5';
export const randomChannelId = '82457399-8a2d-4a59-b391-eba1b905a2f3';
export const offTopicChannelId = '09a04ac0-daa2-4ddd-ae6c-2972c68ccc29';
export const dogVideosChannelId = 'd3194010-fed3-40c2-9e8f-01e87b20f441';

export const getInitialChannels = (): Immutable.List<IChannel> => Immutable.List([
  new Channel({ id: generalChannelId, name: 'General', users: Immutable.List() }),
  new Channel({ id: randomChannelId, name: 'Random', users: Immutable.List() }),
  new Channel({ id: offTopicChannelId, name: 'Off-topic', users: Immutable.List() }),
  new Channel({ id: dogVideosChannelId, name: 'Dog videos', users: Immutable.List() }),
])
;
