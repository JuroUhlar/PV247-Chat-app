import * as Immutable from 'immutable';
import {Record} from 'immutable';

export interface IChannelData {
  readonly id: Uuid;
  name: string;
  users: Immutable.List<Uuid>;
}

export interface IChannel extends IChannelData, IRecordFunctions<IChannelData, IChannel> {
}

const channelRecordData: IChannelData = {
  id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  name: '',
  users: Immutable.List<Uuid>(),
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
