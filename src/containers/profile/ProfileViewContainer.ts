import {connect} from 'react-redux';
import {IState} from '../../models/IState';
import {IProfileViewDataProps, ProfileView} from '../../components/profile/ProfileView';

const mapStateToProps = (state: IState): IProfileViewDataProps => {
  const currentUserId = state.usersInfo.currentUserId;
  const currentUser = state.usersInfo.users.get(currentUserId);

  return {
    avatarPath: currentUser.avatarPath,
  };
};

export const ProfileViewContainer = connect(mapStateToProps)(ProfileView);
