import * as Immutable from 'immutable';
import { Record } from 'immutable';

// export interface IChannel {
//   readonly id: Uuid;
//   name: string;
//   // users: [Uuid];
//   users: Immutable.List<Uuid>;
// }

export interface IChannelData {
  readonly id: Uuid;
  readonly name: string;
  readonly users: Immutable.List<Uuid>;
}

export interface IChannel extends IChannelData, IRecordFunctions<IChannelData, IChannel> {
}

const channelRecordData: IChannelData = {
  id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  name: '',
  users: Immutable.List([]),
};

export class Channel extends Record(channelRecordData) implements IChannel {
  readonly id: Uuid;
  readonly name: string;
  readonly users: Immutable.List<Uuid>;


  toObject(): IChannelData {
    return super.toObject() as IChannelData;
  }

  with(data: Partial<IChannelData>): IChannel {
    return super.merge(data) as Channel;
  }
}

export interface IChannelServerModel {
  readonly id: Uuid;
  readonly name: string;
  readonly customData: {
    users: [];
    orderIndex: number;
  };
}

const channelServerModelRecordData = {
  id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  name: '',
  customData: {
    users: [],
    orderIndex: 0,
  },
};

export class ChannelServerModel extends Record(channelServerModelRecordData) implements IChannelServerModel {
  readonly id: Uuid;
  readonly name: string;
  readonly customData: {
    users: [],
    orderIndex: number,
  };
}
