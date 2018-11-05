import * as uuid from 'uuid';
import * as Immutable from 'immutable';
import { IChannel } from '../models/IChannel';

export const getInitialChannels = (): Immutable.List<IChannel> => Immutable.List([
  { id: uuid(), name: 'General', users: Immutable.List([]) },
  { id: uuid(), name: 'Random', users: Immutable.List([]) },
  { id: uuid(), name: 'Off-topic', users: Immutable.List([]) },
  { id: uuid(), name: 'Cat videos', users: Immutable.List([]) },
]);
