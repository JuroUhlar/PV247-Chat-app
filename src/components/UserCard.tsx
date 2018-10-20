import * as React from 'react';

export class UserCard extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className="user-card">
        <div className="avatar-container">
          <img
            className="avatar"
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
