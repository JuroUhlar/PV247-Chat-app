import * as Immutable from 'immutable';
import { IChannel } from './IChannel';
import {IMessage} from './Message';
// import { IUser } from './IUser';

export interface IState {
  channels: Immutable.List<IChannel>;
  // users: Immutable.List<IUser>;
  messages: Immutable.Map<Uuid, IMessage>;
  loginStatus: boolean;
}

