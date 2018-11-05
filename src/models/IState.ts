import * as Immutable from 'immutable';
import { IChannel } from './IChannel';
// import { IUser } from './IUser';
// import { IMessage } from './IMessage';

export interface IState {
  channels: Immutable.List<IChannel>;
  // users: Immutable.List<IUser>;
  // messages: Immutable.List<IMessage>;
}

