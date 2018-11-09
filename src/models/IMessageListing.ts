import * as Immutable from 'immutable';
import {IMessage} from './Message';

export interface IMessageListing {
  readonly messages: Immutable.Map<Uuid, IMessage>;
  readonly messageIds: Immutable.OrderedSet<Uuid>;
}

