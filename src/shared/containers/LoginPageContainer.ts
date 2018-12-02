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
import { logInUser } from '../../profile/actionCreators/requests/logInUser';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: RouteComponentProps<any>): ILoginPageProps => ({
  onLogInClick: (email: string) => logInUser(email)(dispatch),
  ...ownProps,
});

export const LoginPageContainer = withRouter(connect(null, mapDispatchToProps)(LoginPage));
