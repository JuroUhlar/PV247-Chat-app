import { connect } from 'react-redux';
import { IState } from '../../shared/models/IState';
import {
  IProfileFieldsCallbackProps,
  IProfileFieldsDataProps,
  ProfileFields
} from '../components/ProfileFields';
import { getCurrentUser } from '../utils/usersUtils';
import { Dispatch } from 'redux';
import { updateUserRequest } from '../actionCreators/requests/updateUser';
import { IUser } from '../models/User';

const mapStateToProps = (state: IState): IProfileFieldsDataProps => {
  const currentUser = getCurrentUser(state.usersInfo);

  return {
    user: currentUser,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IProfileFieldsCallbackProps => ({
  onSave: (user: IUser, updatedUsername: string) => updateUserRequest({ user, updatedUsername })(dispatch),
});

export const ProfileFieldsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileFields);
