import * as React from 'react';
import * as PropTypes from 'prop-types';
import {LoginPage} from './LoginPage';
import {ContentWrapper} from './ContentWrapper';

export interface IAppCallbackProps {
  readonly onLogin: () => void;
}

export interface IAppDataProps {
  readonly isLogged: boolean;
}

export type AppProps = IAppCallbackProps & IAppDataProps;

export class App extends React.PureComponent<AppProps> {
  static displayName = 'App';

  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  constructor(props: any) {
    super(props);
  }

  _onLoginClick = () => {
    this.props.onLogin();
  };

  render(): JSX.Element {
    const {isLogged} = this.props;
    return (
      <div className="full-height">
        {isLogged ?
          <ContentWrapper/>
          :
          <LoginPage
            onLogInClick={this._onLoginClick}
          />
        }
      </div>
    );
  }
}

