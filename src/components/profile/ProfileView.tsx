import * as PropTypes from 'prop-types';
import * as React from 'react';
import {ProfileFieldsContainer} from '../../containers/profile/ProfileFieldsContainer';
import {ProfileAvatarSettingsContainer} from '../../containers/profile/ProfileAvatarSettingsContainer';

export const ProfileView: React.SFC = () => (
  <div>
    <div>
      <section className="user-profile">
        <ProfileAvatarSettingsContainer/>
        <ProfileFieldsContainer/>
      </section>
    </div>
  </div>
);

ProfileView.displayName = 'ProfileView';
ProfileView.propTypes = {
  avatarPath: PropTypes.string,
};
