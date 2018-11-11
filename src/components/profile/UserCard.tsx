import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Avatar} from './Avatar';
import * as ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import {DropdownButton} from 'react-bootstrap';
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem';
import * as Glyphicon from 'react-bootstrap/lib/Glyphicon';

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
        onClick={() => {
          this.props.onClick('ProfilePage');
        }}
      >
        <div className="avatar-container">
          <Avatar
            avatarSize="mini-avatar"
            avatarPath={this.props.avatarPath}
          />
        </div>
        <div className="user-card_username-container">
          <span>{this.props.username}</span>
        </div>
        <div className="user-card_icon-container">
          <ButtonToolbar
            className="user-card_open-user-menu-icon">
            <DropdownButton
              dropup
              bsStyle="link"
              title={
                <div style={{display: 'inline-block'}}>
                  <Glyphicon glyph="chevron-up"/>
                </div>}
              noCaret
              id="dropdown-no-caret"
            >
              <MenuItem
                key="viewUserProfile"
                divider> View Profile
              </MenuItem>
              <MenuItem>Another option</MenuItem>
              <MenuItem key="userLogout">Log Out</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}
