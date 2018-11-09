import * as Immutable from 'immutable';
import { Record } from 'immutable';

export interface IMessageData {
  readonly id: Uuid;
  readonly timestamp: Date | null;
  readonly authorId: Uuid;
  readonly channelId: Uuid;
  readonly text: string;
  readonly likes: Immutable.List<Uuid>;
  readonly dislikes: Immutable.List<Uuid>;
}

export interface IMessage extends IMessageData, IRecordFunctions<IMessageData, IMessage> {
}

const recordData: IMessageData = {
  id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  text: '',
  timestamp: null,
  authorId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  channelId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  likes: Immutable.List<Uuid>(),
  dislikes: Immutable.List<Uuid>(),
};

export class Message extends Record(recordData) implements IMessage {
  readonly id: Uuid;
  readonly timestamp: Date | null;
  readonly authorId: Uuid;
  readonly channelId: Uuid;
  readonly text: string;
  readonly likes: Immutable.List<Uuid>;
  readonly dislikes: Immutable.List<Uuid>;

  toObject(): IMessageData {
    return super.toObject() as IMessageData;
  }

  with(data: Partial<IMessageData>): IMessage {
    return super.merge(data) as Message;
  }
}
