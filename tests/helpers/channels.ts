import { Channel } from '../../src/channels/models/Channel';
import { user1Id, user2Id } from './users';
import * as Immutable from 'immutable';

export const channel1 = new Channel({
  name: 'General',
  id: 'e569c598-91f7-47ef-a0ab-44bfb3635a12',
  users: Immutable.List([user1Id, user2Id])
});
