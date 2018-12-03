import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  ILoginPageProps,
  LoginPage,
} from '../components/LoginPage';
import {
  RouteComponentProps,
  withRouter
} from 'react-router';
import { auth } from '../actionCreators/requests/authenticateRequest';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: RouteComponentProps<any>): ILoginPageProps => ({
  onLogInClick: (email: string) => auth(email)(dispatch),
  ...ownProps,
});

export const LoginPageContainer = withRouter(connect(null, mapDispatchToProps)(LoginPage));
