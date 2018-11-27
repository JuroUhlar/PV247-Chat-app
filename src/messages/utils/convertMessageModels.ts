import * as Immutable from 'immutable';
import { IMessage, IMessageServerModel, Message, MessagePopularity, MessageServerModel } from '../models/Message';

export const convertServerToViewMessageModel = (serverModel: IMessageServerModel): IMessage => {
  const { value, createdAt, id, customData: { authorId, popularity: { likes, dislikes } } } = serverModel;
  const timestamp = Date.parse(createdAt);
  const popullll = new MessagePopularity({
    likes: Immutable.Set(likes),
    dislikes: Immutable.Set(dislikes)
  });
  return (new Message({
    id,
    text: value,
    timestamp,
    authorId,
    channelId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    popularity: popullll,
  }));
};

export const convertViewToServerMessageModel = (clientModel: IMessage, authorEmail: string): IMessageServerModel => {
  const { text, timestamp, popularity, id } = clientModel;
  const createdAtDate = timestamp && timestamp.toString();
  return (new MessageServerModel({
    id,
    value: text,
    createdAtDate,
    updatedAtDate: createdAtDate,
    createdBy: authorEmail,
    updatedBy: authorEmail,
    customData: { popularity }
  }));
};
