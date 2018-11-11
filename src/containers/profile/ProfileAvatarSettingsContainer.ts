import {connect} from 'react-redux';
import {IState} from '../../models/IState';
import {IProfileAvatarSettingsDataProps, ProfileAvatarSettings} from '../../components/profile/ProfileAvatarSettings';
import {getCurrentUser} from '../../utils/usersUtils';

const mapStateToProps = (state: IState): IProfileAvatarSettingsDataProps => {
  const currentUser = getCurrentUser(state.usersInfo);
  const {avatarPath} = currentUser;

  return {
    avatarPath,
  };
};

export const ProfileAvatarSettingsContainer = connect(mapStateToProps)(ProfileAvatarSettings);
