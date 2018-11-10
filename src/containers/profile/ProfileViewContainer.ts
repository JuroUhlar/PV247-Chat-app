import {connect} from 'react-redux';
import {IState} from '../../models/IState';
import {IProfileViewDataProps, ProfileView} from '../../components/profile/ProfileView';
import {getCurrentUser} from '../../utils/usersUtils';

const mapStateToProps = (state: IState): IProfileViewDataProps => {
  const currentUser = getCurrentUser(state.usersInfo);
  const {avatarPath} = currentUser;

  return {
    avatarPath,
  };
};

export const ProfileViewContainer = connect(mapStateToProps)(ProfileView);
