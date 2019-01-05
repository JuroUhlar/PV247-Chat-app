import { Channel } from '../../src/channels/models/Channel';
import { user1Id, user2Id } from './users';
import * as Immutable from 'immutable';

export const channel1 = new Channel({
  name: 'General',
  id: 'e569c598-91f7-47ef-a0ab-44bfb3635a12',
  users: Immutable.List([user1Id, user2Id])
});

export const channel2 = new Channel({
  name: 'Random',
  id: 'b9b0e2b0-ed4c-4a3a-ac28-4e34cc2009a7',
  users: Immutable.List([user1Id, user2Id])
});

export const channelNoUsers = new Channel({
  name: 'Work',
  id: '80f5f2e6-cd0c-4f94-a9b3-066580ee5c9e',
  users: Immutable.List([])
});
