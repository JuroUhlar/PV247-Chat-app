import * as React from 'react';

export class LoginPage extends React.PureComponent {
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
                <button className="btn btn-primary btn-block">Log in</button>
              </div>
              <div className="col-sm-6">
                <button className="btn btn-secondary btn-block">Sign Up</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

