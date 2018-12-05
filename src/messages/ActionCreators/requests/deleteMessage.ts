import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import {
  deleteMessage,
  failToDeleteMessage,
  succeedToDeleteMessage
} from '../messageActionCreators';
import {
  CHANNELS_ROUTE,
  MESSAGES_ROUTE,
  SERVER_ROUTE
} from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';
import { getBearer } from '../../../shared/utils/getBearer';

const deleteMessageFactoryDependencies = {
  deleteBegin: deleteMessage,
  success: succeedToDeleteMessage,
  error: failToDeleteMessage,
  delete: (channelId: Uuid, messageId: Uuid) => fetch(`${SERVER_ROUTE}${CHANNELS_ROUTE}${channelId}/${MESSAGES_ROUTE}/${messageId}`, {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      authorization: getBearer(),
    },
  })
    .then(response => checkStatus(response)),
};

interface IDeleteMessageFactoryDependencies {
  readonly deleteBegin: (id: Uuid) => Action;
  readonly success: (json: object) => Action;
  readonly error: (id: string, error: Error) => Action;
  readonly delete: (channelId: Uuid, messageId: Uuid) => Promise<Response>;
}

const deleteMessageFactory = (dependencies: IDeleteMessageFactoryDependencies) =>
  (dispatch: Dispatch, channelId: Uuid, messageId: Uuid): Promise<Action> => {
    dispatch(dependencies.deleteBegin(messageId));

    return dependencies.delete(channelId, messageId)
      .then(response => response.json())
      .then(message => dispatch(dependencies.success(message)))
      .catch((error: Error) => dispatch(dependencies.error(messageId, error)));
  };

export const deleteMessageRequest = deleteMessageFactory(deleteMessageFactoryDependencies);
