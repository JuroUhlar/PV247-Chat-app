import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Avatar} from './Avatar';
import {ProfileFields} from './ProfileFields';

export interface IProfileViewDataProps {
  readonly avatarPath?: string;
  readonly email: string;
  readonly username: string;
}

export interface IProfileViewCallbackProps {
}

type ProfileViewProps = IProfileViewCallbackProps & IProfileViewDataProps;

export const ProfileView: React.SFC<ProfileViewProps> = ({
 avatarPath,
 email,
 username,
}) => (
  <div>
    <div>
      <section className="user-profile">
        <div className="avatar-container user-profile-block">
          <h1 className="user-profile-header">Your Profile</h1>
          <Avatar
            avatarSize="avatar"
            avatarPath={avatarPath}
          />
          <button className="btn btn-default">
            Change Avatar
          </button>
        </div>
        <ProfileFields
          email={email}
          username={username}
        />
      </section>
    </div>
  </div>
);

ProfileView.displayName = 'ProfileView';
ProfileView.propTypes = {
  avatarPath: PropTypes.string,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
