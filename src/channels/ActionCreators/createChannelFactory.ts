import { CHANNEL_CREATE } from '../../shared/constants/actionTypes';
import * as Immutable from 'immutable';

export interface ICreateChannelDependencies {
  name: string;
  users: Immutable.List<Uuid>;
}

export const createChannelFactory = (idGenerator: () => Uuid): ((dependencies: ICreateChannelDependencies) => Action) =>
  (dependencies: ICreateChannelDependencies): Action => ({
    type: CHANNEL_CREATE,
    payload: {
      id: idGenerator(),
      name: dependencies.name,
      users: dependencies.users,
    },
  });
