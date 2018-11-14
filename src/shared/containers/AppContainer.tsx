import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {IAppCallbackProps, IAppDataProps, App} from '../components/App';
import {IState} from '../models/IState';
import {logIn} from '../../profile/usersActionCreators';
import { RouteComponentProps, withRouter } from 'react-router';

const mapStateToProps = (state: IState, ownProps: RouteComponentProps<any>): IAppDataProps => ({
  isLogged: !!state.usersInfo.currentUserId,
  ...ownProps,
});

const mapDispatchToProps = (dispatch: Dispatch): IAppCallbackProps => ({
  onLogin: (name: string) => dispatch(logIn(name)),
});

export const AppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
