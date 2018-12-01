import * as Immutable from 'immutable';
import { Channel, IChannelServerModel, IChannel, ChannelServerModel } from '../models/Channel';

export const convertServerToViewChannelModel = (serverModel: IChannelServerModel): IChannel => {
  const { id, name, customData: { users } } = serverModel;
  const usersList: Immutable.List<Uuid> = Immutable.List(users);
  return (new Channel({
    id,
    name,
    users: usersList,
  }));
};

export const convertViewToServerChannelModel = (clientModel: IChannel): IChannelServerModel => {
  const { id, name, users } = clientModel;
  return (new ChannelServerModel({
    id,
    name,
    customData: {
      users: users.toArray()
    }
  }));
};
