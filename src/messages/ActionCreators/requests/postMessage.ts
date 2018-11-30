import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import * as uuid from 'uuid';
import { createMessage, failToPostMessage, succeedToPostMessage } from '../messageActionCreators';
import { CHANNELS_ROUTE, MESSAGES_ROUTE, SERVER_ROUTE } from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';
import { janeBearer } from '../../../profile/utils/usersUtils';
import { ICreateMessageDependencies } from '../createMessageFactory';
import { IMessageData, Message } from '../../models/Message';
import { convertViewToServerMessageModel } from '../../utils/convertMessageModels';

const postMessageFactoryDependencies = {
  postBegin: createMessage,
  success: succeedToPostMessage,
  error: failToPostMessage,
  post: (body: Partial<IMessageData>) => fetch(`${SERVER_ROUTE}${CHANNELS_ROUTE}${body.channelId}/${MESSAGES_ROUTE}`, {
    method: 'POST',
    body: JSON.stringify(convertViewToServerMessageModel(body)),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      accept: 'application/json',
      authorization: 'Bearer ' + janeBearer,
    },
  })
    .then(response => checkStatus(response)),
  idGenerator: uuid,
};

interface IPostMessageFactoryDependencies {
  postBegin: (body: Partial<IMessageData>) => Action;
  success: (json: object) => Action;
  error: (id: string, error: Error) => Action;
  post: (body: Partial<IMessageData>) => Promise<Response>;
  idGenerator: () => string;
}

const postMessageFactory = (dependencies: IPostMessageFactoryDependencies) => (data: ICreateMessageDependencies) =>
  (dispatch: Dispatch): Promise<Action> => {
    const clientId = dispatch(dependencies.postBegin(data)).payload.id;
    const body = new Message({ ...data, id: clientId });

    return dependencies.post(body)
      .then(response => response.json())
      .then(message => dispatch(dependencies.success(message)))
      .catch((error: Error) => dispatch(dependencies.error(clientId, error)));
  };

export const postMessageRequest = postMessageFactory(postMessageFactoryDependencies);
