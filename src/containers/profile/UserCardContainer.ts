import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {IState} from '../../models/IState';
import {IUserCardCallbackProps, IUserCardDataProps, UserCard} from '../../components/profile/UserCard';
import {getCurrentUser} from '../../utils/usersUtils';

const mapStateToProps = (state: IState): IUserCardDataProps => {
  const currentUser = getCurrentUser(state.usersInfo);
  return {
    username: currentUser.name,
    avatarPath: currentUser.avatarPath,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, props: IUserCardCallbackProps): IUserCardCallbackProps => {
  console.log(typeof dispatch);
  return {
    onClick: (name: string) => props.onClick(name),
  };
};

export const UserCardContainer = connect(mapStateToProps, mapDispatchToProps)(UserCard);
