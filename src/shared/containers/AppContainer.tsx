import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {IAppCallbackProps, IAppDataProps, App} from '../components/App';
import {IState} from '../../models/IState';
import {logIn} from '../../profile/usersActionCreators';

const mapStateToProps = (state: IState): IAppDataProps => ({
  isLogged: !!state.usersInfo.currentUserId,
});

const mapDispatchToProps = (dispatch: Dispatch): IAppCallbackProps => ({
  onLogin: (name: string) => dispatch(logIn(name)),
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
