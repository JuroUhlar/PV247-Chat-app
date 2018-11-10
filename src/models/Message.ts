import * as Immutable from 'immutable';
import {Record} from 'immutable';

interface IMessagePopularityData {
  readonly likes: Immutable.Set<Uuid>;
  readonly dislikes: Immutable.Set<Uuid>;
}

export interface IMessagePopularity extends IMessagePopularityData, IRecordFunctions<IMessagePopularityData, IMessagePopularity> {
}

const popularityRecordData: IMessagePopularityData = {
  likes: Immutable.Set<Uuid>(),
  dislikes: Immutable.Set<Uuid>(),
};

export class MessagePopularity extends Record(popularityRecordData) implements IMessagePopularity {
  readonly likes: Immutable.Set<Uuid>;
  readonly dislikes: Immutable.Set<Uuid>;

  toObject(): IMessagePopularityData {
    return super.toObject() as IMessagePopularityData;
  }

  with(data: Partial<IMessagePopularityData>): IMessagePopularity {
    return super.merge(data) as MessagePopularity;
  }
}

export interface IMessageData {
  readonly id: Uuid;
  readonly timestamp: Date | null;
  readonly authorId: Uuid;
  readonly channelId: Uuid;
  readonly text: string;
  readonly popularity: IMessagePopularity;
}

export interface IMessage extends IMessageData, IRecordFunctions<IMessageData, IMessage> {
}

const messageRecordData: IMessageData = {
  id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  text: '',
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
  readonly text: string;
  readonly popularity: IMessagePopularity;


  toObject(): IMessageData {
    return super.toObject() as IMessageData;
  }

  with(data: Partial<IMessageData>): IMessage {
    return super.merge(data) as Message;
  }
}
