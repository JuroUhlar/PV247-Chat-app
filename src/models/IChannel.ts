import * as Immutable from 'immutable';

export interface IChannel {
  readonly id: Uuid;
  name: string;
  // users: [Uuid];
  users: Immutable.List<Uuid>;
}
