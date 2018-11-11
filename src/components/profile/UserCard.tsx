import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Avatar} from './Avatar';
import * as ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import * as Glyphicon from 'react-bootstrap/lib/Glyphicon';

export interface IUserCardCallbackProps {
  readonly onClickViewProfile: (name: string) => void;
  readonly onLogout: (userId: Uuid) => void;
}

export interface IUserCardDataProps {
  readonly username: string;
  readonly userId: string;
  readonly avatarPath?: string;
}

type UserCardProps = IUserCardDataProps & IUserCardCallbackProps;

export class UserCard extends React.PureComponent<UserCardProps> {
  static displayName = 'UserCard';
  static propTypes = {
    username: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    avatarPath: PropTypes.string,

    onClickViewProfile: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
  };

  constructor(props: any) {
    super(props);
  }

  _handleLogout = () => this.props.onLogout(this.props.userId);

  _handleViewProfile = () => this.props.onClickViewProfile('ProfilePage');

  render(): JSX.Element {
    return (
      <div
        className="user-card"
      >
        <div
          className="avatar-container"
          onClick={this._handleViewProfile}>
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
                onClick={this._handleViewProfile}
                key="viewUserProfile"
                > View Profile
              </MenuItem>
              <MenuItem divider />
              <MenuItem>Another option</MenuItem>
              <MenuItem
                key="userLogout"
                onClick={this._handleLogout}
              >Log Out
              </MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}
