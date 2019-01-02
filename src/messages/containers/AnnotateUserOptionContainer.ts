import * as Immutable from 'immutable';
import {
  AnnotateUserOption,
  IAnnotateUserOptionProps,
} from '../components/AnnotateUserOption';
import { IState } from '../../shared/models/IState';
import { connect } from 'react-redux';

interface AnnotateUserOptionContainerOwnProps {
  onAnnotate: (users: Immutable.Set<Uuid>) => void;
}

const mapStateToProps = (state: IState, ownProps: AnnotateUserOptionContainerOwnProps): IAnnotateUserOptionProps => ({
  users: state.usersInfo.users.toList(),
  onAnnotate: ownProps.onAnnotate,
});

export const AnnotateUserOptionContainer = connect(mapStateToProps)(AnnotateUserOption);
