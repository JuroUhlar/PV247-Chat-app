import { Record } from 'immutable';
import {
  IMessagePopularity,
  MessagePopularity
} from './MessagePopularity';
import { RawDraftContentState } from 'draft-js';

export interface IMessageData {
  readonly id: Uuid;
  readonly timestamp: Date | null;
  readonly authorId: Uuid;
  readonly channelId: Uuid;
  readonly text: RawDraftContentState | null;
  readonly popularity: IMessagePopularity;
}

export interface IMessage extends IMessageData, IRecordFunctions<IMessageData, IMessage> {
}

export const messageRecordData: IMessageData = {
  id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  text: null,
  timestamp: null,
  authorId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  channelId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  popularity: new MessagePopularity(),
};

export class Message extends Record(messageRecordData) implements IMessage {
  readonly id: Uuid;
  readonly timestamp: Date | null;
  readonly authorId: Uuid;
  readonly channelId: Uuid;
  readonly text: RawDraftContentState | null;
  readonly popularity: IMessagePopularity;

  toObject(): IMessageData {
    return super.toObject() as IMessageData;
  }

  with(data: Partial<IMessageData>): IMessage {
    return super.merge(data) as Message;
  }
}

export interface IMessagePostServerModelData {
  readonly value: string;
  readonly customData: {
    popularity: {
      likes: [];
      dislikes: [];
    },
    authorId: Uuid;
    clientId: Uuid;
  };
}

export interface IMessageServerModel extends IMessagePostServerModelData {
  readonly id: Uuid;
  readonly createdAt: string;
  readonly createdBy: Uuid;
  readonly updatedAt: string;
  readonly updatedBy: Uuid;
}

const messageServerModelRecordData = {
  id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  value: '',
  createdAt: '',
  createdBy: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  updatedAt: null,
  updatedBy: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  customData: {
    popularity: {
      likes: [],
      dislikes: [],
    },
    authorId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    clientId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  },
};

export class MessageServerModel extends Record(messageServerModelRecordData) implements IMessageServerModel {
  readonly id: Uuid;
  readonly value: string;
  readonly createdAt: string;
  readonly createdBy: Uuid;
  readonly updatedAt: string;
  readonly updatedBy: Uuid;
  readonly customData: {
    popularity: {
      likes: [];
      dislikes: [];
    },
    authorId: Uuid;
    clientId: Uuid;
  };
}
