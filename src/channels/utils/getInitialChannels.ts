import * as Immutable from 'immutable';
import { IChannel } from '../models/IChannel';

export const generalChannelId = '2be69b8a-1c3c-4f69-8a7c-f9445d13acb6';
export const randomChannelId = 'c5d2e3fd-4914-4e43-8533-367f120d8b12';
export const offTopicChannelId = 'caf29328-5325-45fd-be08-84bd47c53338';
const dogVidChannelId = '69eba76b-0197-4bf4-b3f0-95a7b14356f7';

export const getInitialChannels = (): Immutable.List<IChannel> => Immutable.List([
  { id: generalChannelId, name: 'General', users: Immutable.List([]) },
  { id: randomChannelId, name: 'Random', users: Immutable.List([]) },
  { id: offTopicChannelId, name: 'Off-topic', users: Immutable.List([]) },
  { id: dogVidChannelId, name: 'Dog videos', users: Immutable.List([]) },
]);
