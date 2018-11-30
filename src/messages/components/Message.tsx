import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Avatar } from '../../profile/components/Avatar';
import { addLineBreaks } from '../../shared/utils/textUtils';

export interface IMessageCallbackProps {
  readonly onLikeMessage: (messageId: Uuid, userId: Uuid) => void;
  readonly onDislikeMessage: (messageId: Uuid, userId: Uuid) => void;
  readonly onDeleteMessage: (currentChannelId: Uuid, messageId: Uuid) => void;
}

export interface IMessageDataProps {
  readonly text: string;
  readonly messagePos: string;
  readonly messageLikesCount: number;
  readonly avatarUrl?: string;
  readonly messageId: Uuid;
  readonly authorId: Uuid;
  readonly currentChannelId: Uuid;
  readonly currentUserId: Uuid;
}

type MessageProps = IMessageCallbackProps & IMessageDataProps;

export class Message extends React.PureComponent<MessageProps> {
  static displayName = 'Message';
  static propTypes = {
    text: PropTypes.string.isRequired,
    messagePos: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    messageLikesCount: PropTypes.number.isRequired,
    messageId: PropTypes.string.isRequired,
    currentUserId: PropTypes.string.isRequired,
    currentChannelId: PropTypes.string.isRequired,

    onLikeMessage: PropTypes.func.isRequired,
    onDislikeMessage: PropTypes.func.isRequired,
  };

  _onLike = () => {
    const { currentUserId, messageId } = this.props;
    this.props.onLikeMessage(messageId, currentUserId);
  };

  _onDislike = () => {
    const { currentUserId, messageId, onDislikeMessage } = this.props;
    onDislikeMessage(messageId, currentUserId);
  };

  _onDelete = () => {
    const { messageId, authorId, currentUserId, onDeleteMessage, currentChannelId } = this.props;
    if (authorId === currentUserId) {
      onDeleteMessage(currentChannelId, messageId);
    }
  };

  _createMarkup = (text: string) => ({ __html: addLineBreaks(text) });

  render(): JSX.Element {
    const {
      text,
      messagePos,
      avatarUrl,
      messageLikesCount,
    } = this.props;


    return (
      <div className={messagePos}>
        <div className="message-pane">
          <Avatar
            avatarPath={avatarUrl}
            avatarPos="avatar-side"
            avatarSize="mini-avatar"
          />
          <div className="message-side">
            <div className="top-message-bar-cont">
              <div className="top-message-bar">
                <div
                  className="small-icon glyphicon glyphicon-trash"
                  onClick={this._onDelete}
                />
                <div
                  className="small-icon glyphicon glyphicon-thumbs-down"
                  onClick={this._onDislike}
                />
                <div className="small-icon" style={{ fontWeight: 'bold' }}>
                  {messageLikesCount}
                </div>
                <div
                  className="small-icon glyphicon glyphicon-thumbs-up"
                  onClick={this._onLike}
                />
              </div>
            </div>
            <div
              className="text-container message-pane-block"
              dangerouslySetInnerHTML={this._createMarkup(text)}/>
          </div>
        </div>
      </div>
    );
  }
}
