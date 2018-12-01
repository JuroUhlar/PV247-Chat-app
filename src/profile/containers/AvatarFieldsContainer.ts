import { connect } from 'react-redux';
import { IState } from '../../shared/models/IState';
import {
  AvatarFields,
  IAvatarFieldsCallbackProps,
  IAvatarFieldsDataProps
} from '../components/AvatarFields';
import { getCurrentUser } from '../utils/usersUtils';
import { Dispatch } from 'redux';
import { updateUserRequest } from '../actionCreators/requests/updateUser';
import { IUser } from '../models/User';

const mapStateToProps = (state: IState): IAvatarFieldsDataProps => {
  const currentUser = getCurrentUser(state.usersInfo);

  return {
    user: currentUser,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IAvatarFieldsCallbackProps => ({
  onSave: (user: IUser, updatedAvatarPath: string) => updateUserRequest({ user, updatedAvatarPath })(dispatch),
});

export const AvatarFieldsContainer = connect(mapStateToProps, mapDispatchToProps)(AvatarFields);
