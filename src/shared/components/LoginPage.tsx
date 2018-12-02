import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  Link,
  RouteComponentProps
} from 'react-router-dom';
import { CHANNEL_VIEW_ROUTE } from '../constants/routes';
import { withRouterPropTypes } from '../utils/routerProps';

export interface ILoginPageProps extends RouteComponentProps {
  readonly onLogInClick: (email: string) => void;
}

interface ILoginPageState {
  readonly email: string;
}

export class LoginPage extends React.PureComponent<ILoginPageProps, ILoginPageState> {
  static displayName = 'LoginPage';
  static propTypes = {
    onLogInClick: PropTypes.func.isRequired,
    ...withRouterPropTypes,
  };

  constructor(props: ILoginPageProps) {
    super(props);
    this.state = {
      email: '',
    };
  }

  _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.currentTarget.value;
    this.setState(() => ({ email }));
  };

  _handleLogIn = () => {
    const { onLogInClick } = this.props;
    onLogInClick(this.state.email);
  };

  render(): JSX.Element {
    return (
      <div className="login-form">
        <form>
          <h2 className="text-center">PV247 Chat</h2>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={this._handleChange}
            />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-6">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  disabled={!this.state.email}
                  onClick={this._handleLogIn}
                >Log in
                </button>
              </div>
              <div className="col-sm-6">
                <Link to={CHANNEL_VIEW_ROUTE}>
                  <button
                    className="btn btn-secondary btn-block"
                  >Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

