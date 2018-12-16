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

const mapStateToProps = (state: IState): IAvatarFieldsDataProps => {
  const currentUser = getCurrentUser(state.usersInfo);

  return {
    user: currentUser,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IAvatarFieldsCallbackProps => ({
  onSave: (updatedAvatarPath: string) => dispatch(updateUserRequest({ updatedAvatarPath })),
});

export const AvatarFieldsContainer = connect(mapStateToProps, mapDispatchToProps)(AvatarFields);
