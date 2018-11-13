import * as React from 'react';

interface ILoginPageProps {
  readonly onLogInClick: () => void;
}

export class LoginPage extends React.PureComponent<ILoginPageProps> {
  render(): JSX.Element {
    return (
      <div className="login-form">
        <form>
          <h2 className="text-center">PV247 Chat</h2>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-6">
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.props.onLogInClick}
                >Log in</button>
              </div>
              <div className="col-sm-6">
                <button
                  className="btn btn-secondary btn-block"
                  onClick={this.props.onLogInClick}
                >Sign Up</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
