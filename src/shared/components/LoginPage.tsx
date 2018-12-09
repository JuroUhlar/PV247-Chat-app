import * as React from 'react';
import * as PropTypes from 'prop-types';
import { RouteComponentProps } from 'react-router-dom';
import {
  Tab,
  Tabs,
} from 'react-bootstrap/lib';
import { withRouterPropTypes } from '../utils/routerProps';
import { LoginTab } from './LoginTab';
import { SignUpTab } from './SignUpTab';

export interface ILoginPageProps extends RouteComponentProps {
  readonly onLogInClick: (email: string) => void;
  readonly onSignUpClick: (email: string, username: string) => void;
}

export const LoginPage: React.SFC<ILoginPageProps> = (props: ILoginPageProps) => (
  <div className="login-form">
    <h2 className="text-center">Junda app</h2>
    <Tabs
      defaultActiveKey="LogInTab"
      id="login-or-signup-user-forms"
      animation={false}
    >
      <Tab eventKey="LogInTab" title="Log In">
        <LoginTab onLogInClick={props.onLogInClick}/>
      </Tab>
      <Tab eventKey="SignUpTab" title="Sign Up">
        <SignUpTab onSignUpClick={props.onSignUpClick}/>
      </Tab>
    </Tabs>
  </div>
);

LoginPage.displayName = 'LoginPage';
LoginPage.propTypes = {
  ...withRouterPropTypes,

  onLogInClick: PropTypes.func.isRequired,
  onSignUpClick: PropTypes.func.isRequired,
};
