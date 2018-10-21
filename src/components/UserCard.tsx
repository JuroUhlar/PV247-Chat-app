import * as React from 'react';

interface IUserCardProps {
    onClick: (name: string) => void;
}

interface IUserCardState {
  username: string;
}

export class UserCard extends React.PureComponent<IUserCardProps, IUserCardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      username: 'Jane Doe',
    };
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
            src="http://modernurbandesigners.com/Lists/Staff/Attachments/9/female-avatar-square.jpg" />
        </div>
        <div className="user-card_username-container">
          <span>{this.state.username}</span>
        </div>
        <div className="user-card_icon-container">
          <span className="glyphicon glyphicon-chevron-up user-card_open-user-menu-icon" title="User settings" aria-hidden="true" />
        </div>
      </div>
    );
  }
}
