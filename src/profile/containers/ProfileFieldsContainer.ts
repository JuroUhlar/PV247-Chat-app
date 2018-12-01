import {connect} from 'react-redux';
import {IState} from '../../shared/models/IState';
import {IProfileFieldsCallbackProps, IProfileFieldsDataProps, ProfileFields} from '../components/ProfileFields';
import {getCurrentUser} from '../utils/usersUtils';
import {Dispatch} from 'redux';
import {saveChangesToUsername} from '../actionCreators/usersActionCreators';

const mapStateToProps = (state: IState): IProfileFieldsDataProps => {
  const currentUser = getCurrentUser(state.usersInfo);
  const {id, email, name} = currentUser;

  return {
    email,
    username: name,
    userId: id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IProfileFieldsCallbackProps => ({
  onSave: (id, name: string) => dispatch(saveChangesToUsername(id, name)),
});

export const ProfileFieldsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileFields);
