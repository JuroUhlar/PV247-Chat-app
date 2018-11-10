import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Avatar} from '../Profile/Avatar';

export interface IMessageCallbackProps {
  readonly onLikeMessage: () => void;
}

export interface IMessageDataProps {
  readonly text: string;
  readonly messagePos: string;
  readonly messageLikesCount: number;
  readonly avatarUrl?: string;
}

type MessageProps = IMessageCallbackProps & IMessageDataProps;

export class Message extends React.PureComponent<MessageProps> {
  static displayName = 'Message';
  static propTypes = {
    text: PropTypes.string.isRequired,
    messagePos: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    messageLikesCount: PropTypes.number.isRequired,
    onLikeMessage: PropTypes.func.isRequired,
  };

  _onClick = () => this.props.onLikeMessage();

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
                <div className="small-icon glyphicon glyphicon-trash"/>
                <div className="small-icon glyphicon glyphicon-heart"/>
                <div
                  className="small-icon glyphicon glyphicon-thumbs-down"
                  onClick={this._onClick}
                />
                <div className="small-icon" style={{fontWeight: 'bold'}}>
                  {messageLikesCount}
                </div>
              </div>
            </div>
            <div className="text-container message-pane-block">
              {text}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
