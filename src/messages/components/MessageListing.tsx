import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as Immutable from 'immutable';
import { MessageContainer } from '../containers/MessageContainer';
import { IMessage } from '../models/Message';

export interface IMessageListingDataProps {
  readonly messages: Immutable.OrderedMap<Uuid, IMessage>;
}

export const MessageListing: React.SFC<IMessageListingDataProps> = ({ messages }) => {
  this._prepareMessages = () => {
    return (messages && messages.map((message: IMessage, key: Uuid) => {
        return (
          <li key={key}>
            <MessageContainer message={message}/>
          </li>
        );
      })
    ).toArray();
  };

  return (
    <ol>
      {this._prepareMessages()}
    </ol>
  );
};


MessageListing.displayName = 'MessageListing';
MessageListing.propTypes = {
  messages: PropTypes.object,
};
