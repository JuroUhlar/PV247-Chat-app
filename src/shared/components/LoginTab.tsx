import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  Button,
  Form
} from 'react-bootstrap';

export interface ILoginTabProps {
  readonly onLogInClick: (email: string) => void;
}

interface ILoginTabState {
  readonly email: string;
}

export class LoginTab extends React.PureComponent<ILoginTabProps, ILoginTabState> {
  static displayName = 'LoginTab';
  static propTypes = {
    onLogInClick: PropTypes.func.isRequired,
  };

  constructor(props: ILoginTabProps) {
    super(props);
    this.state = {
      email: '',
    };
  }

  _handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.currentTarget.value;
    this.setState(() => ({ email }));
  };

  _handleLogIn = (): void => {
    const { onLogInClick } = this.props;
    onLogInClick(this.state.email);
  };

  render(): JSX.Element {
    const { email } = this.state;
    return (
      <Form>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={this._handleEmailChange}
          />
        </div>
        <Button
          bsStyle="primary"
          block
          disabled={!email}
          onClick={this._handleLogIn}
        >Log in
        </Button>
      </Form>
    );
  }
}
