import * as React from 'react';

interface IUserCardState {
  username: string;
}

export class UserCard extends React.PureComponent<any, IUserCardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      username: 'Jane Doe',
    };
  }

  render(): JSX.Element {
    return (
      <div className="user-card">
        <div className="avatar-container">
          <img
            className="avatar"
            src="http://modernurbandesigners.com/Lists/Staff/Attachments/9/female-avatar-square.jpg" />
        </div>
        <div className="user-card_username">
          <span>{this.state.username}</span>
        </div>
        <div className="user-card_icon-container">
          <span className="glyphicon glyphicon-chevron-up user-card_user-menu-icon" title="User settings" aria-hidden="true" />
        </div>
      </div>
    );
  }
}
