import * as React from 'react';
import * as PropTypes from 'prop-types';
import { RouteComponentProps } from 'react-router-dom';
import { withRouterPropTypes } from '../utils/routerProps';

export interface ILoginPageProps extends RouteComponentProps {
  readonly onLogInClick: (email: string) => void;
}

interface ILoginPageState {
  readonly email: string;
  readonly username: string;
  readonly isSignUpToggled: boolean;
}

export class LoginPage extends React.PureComponent<ILoginPageProps, ILoginPageState> {
  static displayName = 'LoginPage';
  static propTypes = {
    ...withRouterPropTypes,

    onLogInClick: PropTypes.func.isRequired,
  };

  constructor(props: ILoginPageProps) {
    super(props);
    this.state = {
      email: '',
      username: '',
      isSignUpToggled: false,
    };
  }

  _handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.currentTarget.value;
    this.setState(() => ({ email }));
  };

  _handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const username = event.currentTarget.value;
    this.setState(() => ({ username }));
  };

  _handleLogIn = (): void => {
    const { onLogInClick } = this.props;
    onLogInClick(this.state.email);
  };

  _handleToggle = (event: React.FormEvent): void => {
    event.preventDefault();
    const { isSignUpToggled } = this.state;
    this.setState(() => ({ isSignUpToggled: !isSignUpToggled }));
  };

  _handleSignUp = (): void => {
    const { username, email } = this.state;
    console.log(username, email);
  };

  render(): JSX.Element {
    const { isSignUpToggled, email } = this.state;
    return (
      <div className="login-form">
        <form>
          <h2 className="text-center">PV247 Chat</h2>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={this._handleEmailChange}
            />
          </div>
          <div className="form-group">
            <input
              disabled={!isSignUpToggled}
              type="Username"
              className="form-control"
              placeholder="Username"
              onChange={this._handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-6">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  disabled={!email}
                  onClick={this._handleLogIn}
                >Log in
                </button>
              </div>
              <div className="col-sm-6">
                {isSignUpToggled ?
                  <button
                    onClick={this._handleSignUp}
                    className="btn btn-secondary btn-block"
                  > Sign Me Up!
                  </button>
                  :
                  <button
                    onClick={this._handleToggle}
                    className="btn btn-secondary btn-block"
                  > Sign Up?
                  </button>}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

