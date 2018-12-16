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
import { auth } from '../../profile/actionCreators/requests/authenticateRequest';
import { signUpRequests } from '../../profile/actionCreators/requests/signUpRequests';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: RouteComponentProps<any>): ILoginPageProps => ({
  onLogInClick: (email: string) => dispatch(auth(email)),
  ...ownProps,
  onSignUpClick: (email: string, username: string) => dispatch(signUpRequests({ email, username })),
});

export const LoginPageContainer = withRouter(connect(null, mapDispatchToProps)(LoginPage));
