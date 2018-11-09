import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as Immutable from 'immutable';
import {MessageContainer} from '../../containers/Messages/MessageContainer';
import {IMessage} from '../../models/Message';

export interface IMessageListingDataProps {
  messages: Immutable.Map<Uuid, IMessage>;
}

export const MessageList: React.SFC<IMessageListingDataProps> = ({messages}) => {
  this._prepareMessages = () => {
    return (messages.map((message: IMessage, key: Uuid) => {
        const messagePos = message.authorId === 'd6378ee0-df4b-4c28-b57e-2c19b360261f'
          ? 'message-pane-pos-right'
          : 'message-pane-pos-left';
        const likesCount = message.likes.count() - message.dislikes.count();

        return (
          <li key={key}>
            <MessageContainer
              text={message.text}
              messagePos={messagePos}
              messageLikesCount={likesCount || 0}
            />
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


MessageList.displayName = 'MessageList';
MessageList.propTypes = {
  messages: PropTypes.object,
};
