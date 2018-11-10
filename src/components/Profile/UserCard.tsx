import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface IUserCardCallbackProps {
  readonly onClick: (name: string) => void;
}

export interface IUserCardDataProps {
  readonly username: string;
  readonly avatarPath?: string;
}

type UserCardProps = IUserCardDataProps & IUserCardCallbackProps;

export class UserCard extends React.PureComponent<UserCardProps> {
  static displayName = 'UserCard';
  static propTypes = {
    username: PropTypes.string.isRequired,
    avatarPath: PropTypes.string,

    onClick: PropTypes.func.isRequired,
  };

  constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div
          className="user-card"
          onClick={() => { this.props.onClick('ProfilePage'); }}
      >
        <div className="avatar-container">
          <img
            className="mini-avatar"
            src={this.props.avatarPath} />
        </div>
        <div className="user-card_username-container">
          <span>{this.props.username}</span>
        </div>
        <div className="user-card_icon-container">
          <span className="glyphicon glyphicon-chevron-up user-card_open-user-menu-icon" title="User settings" aria-hidden="true" />
        </div>
      </div>
    );
  }
}
