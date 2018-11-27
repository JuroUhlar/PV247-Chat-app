import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import * as uuid from 'uuid';
import { failToFetchMessages, requestMessages, succeedToFetchMessages } from '../../messageActionCreators';
import { CHANNELS_ROUTE, MESSAGES_ROUTE, SERVER_ROUTE } from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';

const janeBearer = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqYW5lQGdtYWlsLmNvbSIsImp0aSI6IjUyODgxOWI0LTM1ZDAtNDEyNS1hNWY3LTMxMWQ4NWNkZWVkZiIsImlhdCI6MTU0MzI3NTY3M';
const janeBearerPart2 = 'iwibmJmIjoxNTQzMjc1NjcyLCJleHAiOjE1NDMzNjIwNzIsImlzcyI6IlBWMjQ3IEFQSSIsImF1ZCI6IlBWMjQ3IFN0dWRlbnRzIn0.XxBcY_kz6VuagtLSrf54dHqKT2UXdGCgr6rTeFMe_Is';

const fetchMessagesFactoryDependencies = {
  fetchBegin: requestMessages,
  success: succeedToFetchMessages,
  error: failToFetchMessages,
  fetch: (channelId: Uuid) => fetch(`${SERVER_ROUTE}${CHANNELS_ROUTE}${channelId}/${MESSAGES_ROUTE}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Bearer ' + janeBearer + janeBearerPart2,
    },
  })
    .then(response => checkStatus(response)),
  idGenerator: uuid,
};

interface IFetchMessagesFactoryDependencies {
  fetchBegin: () => Action;
  success: (json: object) => Action;
  error: (id: string, error: Error) => Action;
  fetch: (channelId: Uuid) => Promise<Response>;
  idGenerator: () => string;
}

const fetchMessagesFactory = (dependencies: IFetchMessagesFactoryDependencies) =>
  (dispatch: Dispatch, channelId: Uuid): Promise<Action> => {
    dispatch(dependencies.fetchBegin());
    const errorId = dependencies.idGenerator();

    return dependencies.fetch(channelId)
      .then(response => response.json())
      .then(messages => dispatch(dependencies.success(messages)))
      .catch((error: Error) => dispatch(dependencies.error(errorId, error)));
  };

export const fetchMessages = fetchMessagesFactory(fetchMessagesFactoryDependencies);
