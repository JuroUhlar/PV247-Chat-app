import {connect} from 'react-redux';
import {IState} from '../../models/IState';
import {AvatarFields, IAvatarFieldsCallbackProps, IAvatarFieldsDataProps} from '../../components/profile/AvatarFields';
import {getCurrentUser} from '../../utils/usersUtils';
import {Dispatch} from 'redux';
import {changeAvatar} from '../../actions/usersActionCreators';

const mapStateToProps = (state: IState): IAvatarFieldsDataProps => {
  const currentUser = getCurrentUser(state.usersInfo);
  const {id, avatarPath} = currentUser;

  return {
    avatarPath,
    userId: id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IAvatarFieldsCallbackProps => ({
  onSave: (id, name: string) => dispatch(changeAvatar(id, name)),
});

export const AvatarFieldsContainer = connect(mapStateToProps, mapDispatchToProps)(AvatarFields);
