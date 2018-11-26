import * as Immutable from 'immutable';
import {IMessage, Message, MessagePopularity} from '../models/Message';
import {janeId} from '../../profile/utils/usersUtils';
import { generalChannelId, offTopicChannelId, randomChannelId } from '../../channels/utils/getInitialChannels';


const harryId = '9bf3232e-01a6-4370-9110-c57bc5233190';
const sallyId = '4a681417-dcfc-4951-b6b8-cb1db613f975';

const messageId1 = '2339d21f-d7fd-4838-aaa7-e009b5cc4ed6';
const messageId2 = '0e5a5341-27f2-488f-8973-8e94dbf743de';
const messageId3 = '37cbc0c1-9ca4-45aa-a376-d29d66ac504f';
const messageId4 = '524a0888-0934-4149-93f6-23f5809dbe39';
const messageId5 = '8c7e905a-9712-4606-8342-65f67d58652c';
const messageId6 = '1473fba9-2b3d-4d90-a608-25c83cd0be47';
const messageId7 = 'a80220eb-4582-43a0-a59b-6ae1314ce235';
const messageId8 = '79fadf06-ada4-4b39-9bba-5cd516209383';

export const getInitialMessages = (): Immutable.Map<Uuid, IMessage> => Immutable.Map({
  [messageId1]: new Message({
    id: messageId1,
    text: 'Harry dates Sally.',
    timestamp: new Date('2018-11-02T03:24:05'),
    authorId: harryId,
    channelId: generalChannelId,
    popularity: new MessagePopularity({
      likes: Immutable.Set<Uuid>([harryId]),
      dislikes: Immutable.Set<Uuid>([sallyId]),
    }),
  }),
  [messageId2]: new Message({
    id: messageId2,
    text: 'Sally reads books.',
    timestamp: new Date('2018-11-04T06:56:14'),
    authorId: sallyId,
    channelId: offTopicChannelId,
    popularity: new MessagePopularity({
      likes: Immutable.Set<Uuid>([harryId, sallyId]),
      dislikes: Immutable.Set<Uuid>(),
    }),
  }),
  [messageId3]: new Message({
    id: messageId3,
    text: 'Fred eats ginger bread.',
    timestamp: new Date('2018-11-04T11:20:34'),
    authorId: sallyId,
    channelId: generalChannelId,
    popularity: new MessagePopularity({
      likes: Immutable.Set<Uuid>([janeId]),
      dislikes: Immutable.Set<Uuid>([harryId]),
    }),
  }),
  [messageId4]: new Message({
    id: messageId4,
    text: 'Excuse me, I\'m a bear.',
    timestamp: new Date('2018-11-10T13:16:20'),
    authorId: janeId,
    channelId: offTopicChannelId,
    popularity: new MessagePopularity({
      likes: Immutable.Set<Uuid>([harryId, janeId, sallyId]),
      dislikes: Immutable.Set<Uuid>(),
    }),
  }),
  [messageId5]: new Message({
    id: messageId5,
    text: 'O.o',
    timestamp: new Date('2018-11-02T08:14:05'),
    authorId: harryId,
    channelId: randomChannelId,
    popularity: new MessagePopularity({
      likes: Immutable.Set<Uuid>(),
      dislikes: Immutable.Set<Uuid>(),
    }),
  }),
  [messageId6]: new Message({
    id: messageId6,
    text:
      '  ______ \n' +
      ' _| ___ \\\n' +
      '(_) |_/ /\n' +
      '  |  __/ \n' +
      ' _| |    \n' +
      '(_)_|  ',
    timestamp: new Date('2018-11-06T11:33:32'),
    authorId: harryId,
    channelId: randomChannelId,
    popularity: new MessagePopularity({
      likes: Immutable.Set<Uuid>([harryId]),
      dislikes: Immutable.Set<Uuid>([sallyId]),
    }),
  }),
  [messageId7]: new Message({
    id: messageId7,
    text: 'What is this rodent that just climbed out of my toilet???',
    timestamp: new Date('2018-11-01T00:28:47'),
    authorId: sallyId,
    channelId: offTopicChannelId,
    popularity: new MessagePopularity({
      likes: Immutable.Set<Uuid>([harryId]),
      dislikes: Immutable.Set<Uuid>(),
    }),
  }),
  [messageId8]: new Message({
    id: messageId8,
    text: 'Is this an out of season april fools joke?',
    timestamp: new Date('2018-11-09T20:27:54'),
    authorId: janeId,
    channelId: offTopicChannelId,
    popularity: new MessagePopularity({
      likes: Immutable.Set<Uuid>([harryId, sallyId, janeId]),
      dislikes: Immutable.Set<Uuid>(),
    }),
  }),

});
