import {
  Message,
  MessageServerModel
} from '../../../../src/messages/models/Message';
import { convertServerToViewMessageModel } from '../../../../src/messages/utils/convertMessageModels';
import {
  annotatedUsers,
  authorId,
  createdAt,
  messageId,
  neutralByBobPopularity,
  text
} from '../../../helpers/messages';

describe('Correctly converts from the server to the client model', () => {
  it('returns the clientModel when a serverModel is received', () => {
    const clientMessage = new Message({
      authorId,
      timestamp: Date.parse(createdAt),
      id: messageId,
      text: JSON.parse(text),
      popularity: neutralByBobPopularity,
      annotatedUsers,
    });

    const serverMessage = new MessageServerModel({
      id: messageId,
      value: text,
      createdAt: new Date(createdAt),
      customData: {
        clientId: messageId,
        popularity: neutralByBobPopularity,
        authorId,
        annotatedUsers,
      }
    });

    const actual = convertServerToViewMessageModel(serverMessage);

    expect(actual).toEqual(clientMessage);
  });
});
