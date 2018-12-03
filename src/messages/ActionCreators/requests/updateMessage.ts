import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import {
  dislikeMessage,
  failToUpdateMessage,
  likeMessage,
  succeedToUpdateMessage
} from '../messageActionCreators';
import {
  CHANNELS_ROUTE,
  MESSAGES_ROUTE,
  SERVER_ROUTE
} from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';
import {
  IMessage,
  IMessageData
} from '../../models/Message';
import { convertViewToServerMessageModel } from '../../utils/convertMessageModels';
import {
  dislikePopularity,
  likePopularity
} from '../../utils/updateMessagePopularity';

interface ISpecificPreferenceDeps {
  updateBegin: (messageId: Uuid, userId: Uuid) => Action;
  updatePopularity: (message: IMessage, userId: Uuid) => IMessage;
}

interface IUpdateMessageFactoryDependencies extends ISpecificPreferenceDeps {
  success: (json: object) => Action;
  error: (id: string, error: Error) => Action;
  update: (body: Partial<IMessageData>, channelId: Uuid) => Promise<Response>;
}

export interface IMessageUpdateData {
  message: IMessage;
  userId: Uuid;
  channelId: Uuid;
}

const updateMessageFactoryDependencies = (specificPreferenceDeps: ISpecificPreferenceDeps) => ({
  updateBegin: specificPreferenceDeps.updateBegin,
  success: succeedToUpdateMessage,
  error: failToUpdateMessage,
  updatePopularity: specificPreferenceDeps.updatePopularity,
  update: (body: Partial<IMessageData>, channelId: Uuid) => fetch(`${SERVER_ROUTE}${CHANNELS_ROUTE}${channelId}/${MESSAGES_ROUTE}/${body.id}`, {
    method: 'PUT',
    body: JSON.stringify(convertViewToServerMessageModel(body)),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      accept: 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('user'),
    },
  })
    .then(response => checkStatus(response))
});

const likeDependencies = updateMessageFactoryDependencies({
  updateBegin: likeMessage,
  updatePopularity: likePopularity,
});
const dislikeDependencies = updateMessageFactoryDependencies({
  updateBegin: dislikeMessage,
  updatePopularity: dislikePopularity,
});

const updateMessageFactory = (dependencies: IUpdateMessageFactoryDependencies) => (data: IMessageUpdateData) =>
  (dispatch: Dispatch): Promise<Action> => {
    const { message, userId, channelId } = data;
    dispatch(dependencies.updateBegin(message.id, userId));
    const updatedMessage = dependencies.updatePopularity(message, userId);

    return dependencies.update(updatedMessage, channelId)
      .then(response => response.json())
      .then(msg => dispatch(dependencies.success(msg)))
      .catch((error: Error) => dispatch(dependencies.error(updatedMessage.id, error)));
  };

export const likeMessageRequest = updateMessageFactory(likeDependencies);
export const dislikeMessageRequest = updateMessageFactory(dislikeDependencies);
