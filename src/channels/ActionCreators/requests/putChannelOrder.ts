import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import {
  reorderChannels,
  succeedToReorderChannels,
  failToReorderChannels
} from '../channelActionCreators';
import {
  SERVER_ROUTE,
  APP_ROUTE
} from '../../../shared/constants/routes';
import { checkStatus } from '../../../shared/utils/checkStatus';

import { getBearer } from '../../../shared/utils/getBearer';
import * as Immutable from 'immutable';

interface AppData {
  readonly customData: AppCustomData;
}

type AppCustomData = {
  readonly channelsOrder: Uuid[];
};

interface IPutAppFactoryDependencies {
  readonly updateBegin: (body: Immutable.OrderedSet<Uuid>) => Action;
  readonly success: (json: object) => Action;
  readonly error: (error: Error) => Action;
  readonly update: (body: Immutable.OrderedSet<Uuid>) => Promise<Response>;
}

const putAppFactoryDependencies = {
  updateBegin: reorderChannels,
  success: succeedToReorderChannels,
  error: failToReorderChannels,
  update: (channelIds: Immutable.OrderedSet<Uuid>) => fetch(`${SERVER_ROUTE}${APP_ROUTE}`, {
    method: 'PUT',
    body: JSON.stringify({
      customData: {
        channelsOrder: channelIds.toArray()
      }
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      accept: 'application/json',
      authorization: getBearer(),
    },
  })
    .then(response => checkStatus(response)),
};

const putAppFactory = (dependencies: IPutAppFactoryDependencies) =>
  (dispatch: Dispatch, channelIds: Immutable.OrderedSet<Uuid>): Promise<Action> => {
    dispatch(dependencies.updateBegin(channelIds));

    return dependencies.update(channelIds)
      .then(response => response.json())
      .then((appData: AppData) => dispatch(dependencies.success(appData)))
      .catch((error: Error) => dispatch(dependencies.error(error)));
  };

export const reorderChannelsRequest = putAppFactory(putAppFactoryDependencies);
