import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {IAppCallbackProps, IAppDataProps, App} from '../components/App';
import {IState} from '../models/IState';
import {logIn} from '../actions/statusActionCreators';

const mapStateToProps = (state: IState): IAppDataProps => ({
  isLogged: state.loginStatus,
});

const mapDispatchToProps = (dispatch: Dispatch): IAppCallbackProps => ({
  onLogin: () => dispatch(logIn()),
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
