import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import * as uuid from 'uuid';
import { createChannel, failToPostChannel, succeedToPostChannel } from '../channelActionCreators';
import { CHANNELS_ROUTE, SERVER_ROUTE } from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';
import { janeBearer } from '../../../profile/utils/usersUtils';
import { ICreateChannelDependencies } from '../createChannelFactory';
import { IChannelData, Channel } from '../../models/Channel';
import { convertViewToServerChannelModel } from '../../utils/convertChannelModels';

interface IPostChannelFactoryDependencies {
  postBegin: (body: Partial<IChannelData>) => Action;
  success: (json: object) => Action;
  error: (id: string, error: Error) => Action;
  post: (body: Partial<IChannelData>) => Promise<Response>;
  idGenerator: () => string;
}

const postChannelFactoryDependencies = {
  postBegin: createChannel,
  success: succeedToPostChannel,
  error: failToPostChannel,
  post: (body: Partial<IChannelData>) => fetch(`${SERVER_ROUTE}${CHANNELS_ROUTE}`, {
    method: 'POST',
    body: JSON.stringify(convertViewToServerChannelModel(body)),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      accept: 'application/json',
      authorization: 'Bearer ' + janeBearer,
    },
  })
    .then(response => checkStatus(response)),
  idGenerator: uuid,
};

const postChannelFactory = (dependencies: IPostChannelFactoryDependencies) => (data: ICreateChannelDependencies) =>
  (dispatch: Dispatch): Promise<Action> => {
    const clientId = dispatch(dependencies.postBegin(data)).payload.id;
    const body = new Channel({ ...data, id: clientId });

    return dependencies.post(body)
      .then(response => response.json())
      .then(message => dispatch(dependencies.success(message)))
      .catch((error: Error) => dispatch(dependencies.error(clientId, error)));
  };

export const postChannelRequest = postChannelFactory(postChannelFactoryDependencies);
