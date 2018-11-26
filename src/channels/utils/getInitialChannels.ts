import * as Immutable from 'immutable';
import { IChannel } from '../models/IChannel';

export const generalChannelId = '788467fa-10b2-43bc-81dd-fc9f53dcd5a5';
export const randomChannelId = '82457399-8a2d-4a59-b391-eba1b905a2f3';
export const offTopicChannelId = '09a04ac0-daa2-4ddd-ae6c-2972c68ccc29';
const dogVidChannelId = 'b5512f68-a529-4417-aac1-be09608588d0';

export const getInitialChannels = (): Immutable.List<IChannel> => Immutable.List([
  { id: generalChannelId, name: 'General', users: Immutable.List([]) },
  { id: randomChannelId, name: 'Random', users: Immutable.List([]) },
  { id: offTopicChannelId, name: 'Off-topic', users: Immutable.List([]) },
  { id: dogVidChannelId, name: 'Dog videos', users: Immutable.List([]) },
]);
