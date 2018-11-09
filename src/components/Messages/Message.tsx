import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface IMessageCallbackProps {
  readonly onLikeMessage: () => void;
}

export interface IMessageDataProps {
  readonly text: string;
  readonly messagePos: string;
  readonly messageLikes: number;
  readonly avatarUrl?: string;
}

type MessageProps = IMessageCallbackProps & IMessageDataProps;

export class Message extends React.PureComponent<MessageProps> {
  static displayName = 'Message';
  static propTypes = {
    text: PropTypes.string.isRequired,
    messagePos: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    messageLikes: PropTypes.number.isRequired,
    onLikeMessage: PropTypes.func.isRequired,
  };

  _onClick = () => this.props.onLikeMessage();

  render(): JSX.Element {
    const spareAvatarUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGR7Mo4SPawVcs97YO3W2TiWl3bjGiEU3_whXMGAcNOMJygVGB';
    const {
      text,
      messagePos,
      avatarUrl,
      messageLikes,
    } = this.props;


    return (
      <div className={messagePos}>
        <div className="message-pane">
          <div className="avatar-side">
            <img
              className="mini-avatar"
              src={avatarUrl || spareAvatarUrl}
            />
          </div>
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
                  {messageLikes}
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