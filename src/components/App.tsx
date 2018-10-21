import * as React from 'react';
import * as PropTypes from 'prop-types';
import { LoginPage } from './LoginPage';
import { ContentWrapper } from './ContentWrapper';

interface IAppState {
  isLogged: boolean;
}

export class App extends React.PureComponent<any, IAppState> {
    static displayName = 'App';

    static propTypes = {
      isLogged: PropTypes.bool.isRequired,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            isLogged: false,
        };
    }

    _onLoginClick = () => {
      this.setState(() => ({
        isLogged: true,
      }));
    };

  render(): JSX.Element {
    return (
      <div className="full-height">
          {!this.state.isLogged &&
          <LoginPage
              onLogInClick={this._onLoginClick}
          />
          }
          {this.state.isLogged &&
          <ContentWrapper />
          }
      </div>
    );
  }
}

