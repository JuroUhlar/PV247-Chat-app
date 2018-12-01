import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import * as uuid from 'uuid';
import { requestChannels, succeedToFetchChannels, failToFetchChannels } from '../channelActionCreators';

import { CHANNELS_ROUTE, SERVER_ROUTE } from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';
import { janeBearer } from '../../../profile/utils/usersUtils';

const fetchChannelsFactoryDependencies = {
  fetchBegin: requestChannels,
  success: succeedToFetchChannels,
  error: failToFetchChannels,
  fetch: () => fetch(`${SERVER_ROUTE}${CHANNELS_ROUTE}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Bearer ' + janeBearer,
    },
  })
    .then(response => checkStatus(response)),
  idGenerator: uuid,
};

interface IFetchChannelsFactoryDependencies {
  fetchBegin: () => Action;
  success: (json: object) => Action;
  error: (id: string, error: Error) => Action;
  fetch: () => Promise<Response>;
  idGenerator: () => string;
}

const fetchChannelsFactory = (dependencies: IFetchChannelsFactoryDependencies) =>
  (dispatch: Dispatch): Promise<Action> => {
    dispatch(dependencies.fetchBegin());
    const errorId = dependencies.idGenerator();

    return dependencies.fetch()
      .then(response => response.json())
      .then(messages => dispatch(dependencies.success(messages)))
      .catch((error: Error) => dispatch(dependencies.error(errorId, error)));
  };

export const fetchMessages = fetchChannelsFactory(fetchChannelsFactoryDependencies);
