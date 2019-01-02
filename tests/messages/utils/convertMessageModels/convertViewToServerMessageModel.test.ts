import {
  Message,
  MessageServerModel
} from '../../../../src/messages/models/Message';
import { convertViewToServerMessageModel } from '../../../../src/messages/utils/convertMessageModels';
import {
  annotatedUsers,
  authorId,
  createdAt,
  messageId,
  neutralByBobPopularity,
  text
} from '../../../helpers/messages';

describe('Correctly converts from the client to the server model', () => {
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
      value: text,
      customData: {
        clientId: messageId,
        popularity: neutralByBobPopularity,
        authorId,
        annotatedUsers,
      }
    });

    const actual = convertViewToServerMessageModel(clientMessage);

    expect(actual).toEqual(serverMessage);
  });
});
