import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import * as uuid from 'uuid';
import {
  failToFetchChannels,
  requestChannels,
  succeedToFetchChannels
} from '../channelActionCreators';

import {
  CHANNELS_ROUTE,
  SERVER_ROUTE
} from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';
import { getBearer } from '../../../shared/utils/getBearer';
import { fetchChannelOrder } from './fetchChannelOrder';

const fetchChannelsFactoryDependencies = {
  fetchBegin: requestChannels,
  success: succeedToFetchChannels,
  error: failToFetchChannels,
  fetch: () => fetch(`${SERVER_ROUTE}${CHANNELS_ROUTE}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: getBearer(),
    },
  })
    .then(response => checkStatus(response)),
  idGenerator: uuid,
};

interface IFetchChannelsFactoryDependencies {
  readonly fetchBegin: () => Action;
  readonly success: (json: object) => Action;
  readonly error: (id: string, error: Error) => Action;
  readonly fetch: () => Promise<Response>;
  readonly idGenerator: () => string;
}

const fetchChannelsFactory = (dependencies: IFetchChannelsFactoryDependencies) =>
  (): any => (dispatch: Dispatch): Promise<Action> => {
    dispatch(dependencies.fetchBegin());
    const errorId = dependencies.idGenerator();

    return dependencies.fetch()
      .then(response => response.json())
      .then(messages => dispatch(dependencies.success(messages)))
      .catch((error: Error) => dispatch(dependencies.error(errorId, error)))
      .then((): Promise<Action> => fetchChannelOrder(dispatch));
  };

export const fetchChannels = fetchChannelsFactory(fetchChannelsFactoryDependencies);
