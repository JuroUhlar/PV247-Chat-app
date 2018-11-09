import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as Immutable from 'immutable';
import {MessageContainer} from '../../containers/Messages/MessageContainer';

export interface IMessageListingDataProps {
  readonly messageIds: Immutable.Set<Uuid>;
}

export const MessageListing: React.SFC<IMessageListingDataProps> = ({messageIds}) => {
  this._prepareMessages = () => {
    return (messageIds && messageIds.map((id: Uuid) => {
        return (
          <li key={id}>
            <MessageContainer messageId={id}/>
          </li>
        );
      })
    ).toArray();
  };

  return (
    <ol className="message-list">
      {this._prepareMessages()}
    </ol>
  );
};


MessageListing.displayName = 'MessageList';
MessageListing.propTypes = {
  messageIds: PropTypes.object,
};
