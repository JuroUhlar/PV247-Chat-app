import * as Immutable from 'immutable';
import {
  IMessage,
  IMessageServerModel,
  Message,
  MessageServerModel
} from '../models/Message';
import { MessagePopularity } from '../models/MessagePopularity';

export const convertServerToViewMessageModel = (serverModel: IMessageServerModel): IMessage => {
  const { value, createdAt, id, customData: { authorId, popularity: { likes, dislikes } } } = serverModel;
  const timestamp = Date.parse(createdAt);
  const messagePopularity = new MessagePopularity({
    likes: Immutable.Set(likes),
    dislikes: Immutable.Set(dislikes)
  });
  return (new Message({
    id,
    text: value,
    timestamp,
    authorId,
    channelId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    popularity: messagePopularity,
  }));
};

export const convertViewToServerMessageModel = (clientModel: Partial<IMessage>): IMessageServerModel => {
  const { text, popularity, id, authorId } = clientModel;
  return (new MessageServerModel({
    value: text,
    customData: {
      popularity,
      authorId,
      clientId: id,
    }
  }));
};
