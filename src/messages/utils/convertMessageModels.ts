import { IMessage, IMessageServerModel, Message, MessagePopularity, MessageServerModel } from '../models/Message';

export const convertServerToViewMessageModel = (serverModel: IMessageServerModel): IMessage => {
  const { value, createdAt, createdBy, customData, id } = serverModel;
  const timestamp = Date.parse(createdAt);
  return (new Message({
    id,
    text: value,
    timestamp,
    authorId: createdBy,
    channelId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    popularity: new MessagePopularity(customData.popularity),
  }));
};

export const convertViewToServerMessageModel = (clientModel: IMessage): IMessageServerModel => {
  const { text, timestamp, authorId, popularity, id } = clientModel;
  const createdAtDate = timestamp && timestamp.toString();
  return (new MessageServerModel({
    id,
    value: text,
    createdAtDate,
    updatedAtDate: createdAtDate,
    createdBy: authorId,
    updatedBy: authorId,
    customData: { popularity }
  }));
};
