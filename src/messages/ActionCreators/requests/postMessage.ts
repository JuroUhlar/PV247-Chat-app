import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import * as uuid from 'uuid';
import {
  createMessage,
  failToPostMessage,
  succeedToPostMessage
} from '../messageActionCreators';
import {
  CHANNELS_ROUTE,
  MESSAGES_ROUTE,
  SERVER_ROUTE
} from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';
import { ICreateMessageDependencies } from '../createMessageFactory';
import {
  IMessageData,
  Message
} from '../../models/Message';
import { convertViewToServerMessageModel } from '../../utils/convertMessageModels';
import { getBearer } from '../../../shared/utils/getBearer';

const postMessageFactoryDependencies = {
  postBegin: createMessage,
  success: succeedToPostMessage,
  error: failToPostMessage,
  post: (body: Partial<IMessageData>, channelId: Uuid) => fetch(`${SERVER_ROUTE}${CHANNELS_ROUTE}${channelId}/${MESSAGES_ROUTE}`, {
    method: 'POST',
    body: JSON.stringify(convertViewToServerMessageModel(body)),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      accept: 'application/json',
      authorization: getBearer(),
    },
  })
    .then(response => checkStatus(response)),
  idGenerator: uuid,
};

interface IPostMessageFactoryDependencies {
  postBegin: (body: Partial<IMessageData>) => Action;
  success: (json: object) => Action;
  error: (id: string, error: Error) => Action;
  post: (body: Partial<IMessageData>, channelId: Uuid) => Promise<Response>;
  idGenerator: () => string;
}

const postMessageFactory = (dependencies: IPostMessageFactoryDependencies) => (data: ICreateMessageDependencies) =>
  (dispatch: Dispatch): Promise<Action> => {
    const clientId = dispatch(dependencies.postBegin(data)).payload.id;
    const body = new Message({ ...data, id: clientId });

    return dependencies.post(body, data.channelId)
      .then(response => response.json())
      .then(message => dispatch(dependencies.success(message)))
      .catch((error: Error) => dispatch(dependencies.error(clientId, error)));
  };

export const postMessageRequest = postMessageFactory(postMessageFactoryDependencies);
