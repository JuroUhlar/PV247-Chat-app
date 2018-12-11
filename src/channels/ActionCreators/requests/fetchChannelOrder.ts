import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import {
  failToFetchChannelOrder,
  requestChannelOrder,
  succeedToFetchChannelOrder
} from '../channelActionCreators';

import {
  SERVER_ROUTE,
  APP_ROUTE
} from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';
import { getBearer } from '../../../shared/utils/getBearer';
import { AppData } from '../../models/AppData';

interface IFetchChannelOrderFactoryDependencies {
  readonly fetchBegin: () => Action;
  readonly success: (json: object) => Action;
  readonly error: (error: Error) => Action;
  readonly fetch: () => Promise<Response>;
}

const fetchChannelsFactoryDependencies = {
  fetchBegin: requestChannelOrder,
  success: succeedToFetchChannelOrder,
  error: failToFetchChannelOrder,
  fetch: () => fetch(`${SERVER_ROUTE}${APP_ROUTE}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: getBearer(),
    },
  })
    .then(response => checkStatus(response)),
};

const fetchChannelOrderFactory = (dependencies: IFetchChannelOrderFactoryDependencies) =>
  (dispatch: Dispatch): Promise<Action> => {
    dispatch(dependencies.fetchBegin());

    return dependencies.fetch()
      .then(response => response.json())
      .then((appData: AppData) => dispatch(dependencies.success(appData)))
      .catch((error: Error) => dispatch(dependencies.error(error)));
  };

export const fetchChannelOrder = fetchChannelOrderFactory(fetchChannelsFactoryDependencies);
