import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import {
  deleteChannel,
  failToDeleteChannel,
  succeedToDeleteChannel
} from '../channelActionCreators';
import {
  CHANNELS_ROUTE,
  SERVER_ROUTE
} from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';
import { getBearer } from '../../../shared/utils/getBearer';

interface IDeleteChannelFactoryDependencies {
  readonly deleteBegin: (id: Uuid) => Action;
  readonly success: () => Action;
  readonly error: (id: string, error: Error) => Action;
  readonly delete: (channelId: Uuid) => Promise<Response>;
}

const deleteMessageFactoryDependencies = {
  deleteBegin: deleteChannel,
  success: succeedToDeleteChannel,
  error: failToDeleteChannel,
  delete: (channelId: Uuid) => fetch(`${SERVER_ROUTE}${CHANNELS_ROUTE}${channelId}`, {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      authorization: getBearer(),
    },
  })
    .then(response => checkStatus(response)),
};

const deleteMessageFactory = (dependencies: IDeleteChannelFactoryDependencies) =>
  (dispatch: Dispatch, channelId: Uuid): Promise<Action> => {
    dispatch(dependencies.deleteBegin(channelId));
    return dependencies.delete(channelId)
      .then(() => dispatch(dependencies.success()))
      .catch((error: Error) => dispatch(dependencies.error(channelId, error)));
  };

export const deleteChannelRequest = deleteMessageFactory(deleteMessageFactoryDependencies);
