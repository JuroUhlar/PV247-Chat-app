import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Avatar } from '../../profile/components/Avatar';
import { addLineBreaks } from '../../shared/utils/textUtils';
import { IMessage } from '../models/Message';
import { IMessageUpdateData } from '../ActionCreators/requests/updateMessage';

export interface IMessageCallbackProps {
  readonly onLikeMessage: (updateData: IMessageUpdateData) => Promise<Action>;
  readonly onDislikeMessage: (updateData: IMessageUpdateData) => Promise<Action>;
  readonly onDeleteMessage: (currentChannelId: Uuid, messageId: Uuid) => void;
}

export interface IMessageDataProps {
  readonly messagePos: string;
  readonly avatarUrl: string;
  readonly message: IMessage;
  readonly currentChannelId: Uuid;
  readonly currentUserId: Uuid;
}

type MessageProps = IMessageCallbackProps & IMessageDataProps;

export class Message extends React.PureComponent<MessageProps> {
  static displayName = 'Message';
  static propTypes = {
    message: PropTypes.object.isRequired,
    messagePos: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    currentUserId: PropTypes.string.isRequired,
    currentChannelId: PropTypes.string.isRequired,

    onLikeMessage: PropTypes.func.isRequired,
    onDislikeMessage: PropTypes.func.isRequired,
  };

  _handleIndicatePreference = (indicatePreference: (updateData: IMessageUpdateData) => Promise<Action>) => {
    const { message, currentUserId, currentChannelId } = this.props;
    indicatePreference({
      message,
      userId: currentUserId,
      channelId: currentChannelId
    });
  };

  _onLike = () => {
    this._handleIndicatePreference(this.props.onLikeMessage);
  };

  _onDislike = () => {
    this._handleIndicatePreference(this.props.onDislikeMessage);
  };

  _onDelete = () => {
    const { message, currentUserId, onDeleteMessage, currentChannelId } = this.props;
    if (message.authorId === currentUserId) {
      onDeleteMessage(currentChannelId, message.id);
    }
  };

  _createMarkup = (text: string) => ({ __html: addLineBreaks(text) });

  render(): JSX.Element {
    const { message, messagePos, avatarUrl } = this.props;
    const { likes, dislikes } = message.popularity;
    const messageLikesCount = likes.size - dislikes.size;

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
              dangerouslySetInnerHTML={this._createMarkup(message.text)}/>
          </div>
        </div>
      </div>
    );
  }
}
