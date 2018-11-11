import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {IState} from '../../models/IState';
import {IUserCardCallbackProps, IUserCardDataProps, UserCard} from '../../components/profile/UserCard';
import {getCurrentUser} from '../../utils/usersUtils';
import {logOut} from '../../actions/usersActionCreators';

const mapStateToProps = (state: IState): IUserCardDataProps => {
  const currentUser = getCurrentUser(state.usersInfo);
  return {
    username: currentUser.name,
    avatarPath: currentUser.avatarPath,
    userId: state.usersInfo.currentUserId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, props: IUserCardCallbackProps): IUserCardCallbackProps => {
  console.log(typeof dispatch);
  return {
    onClickViewProfile: (name: string) => props.onClickViewProfile(name),
    onLogout: (userId: Uuid) => dispatch(logOut(userId)),
  };
};

export const UserCardContainer = connect(mapStateToProps, mapDispatchToProps)(UserCard);
