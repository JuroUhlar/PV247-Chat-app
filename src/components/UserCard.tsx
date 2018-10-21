import * as React from 'react';

interface IUserCardProps {
    onClick: (name: string) => void;
}

export class UserCard extends React.PureComponent<IUserCardProps> {
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
        <div className="user-card_username">
          <span>User name</span>
        </div>
        <div className="user-card_icon-container">
          <span className="glyphicon glyphicon-chevron-up user-card_user-menu-icon" title="User settings" aria-hidden="true" />
        </div>
      </div>
    );
  }
}
