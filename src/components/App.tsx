import * as React from 'react';
import { LoginPage } from './LoginPage';
import { ContentWrapper } from './ContentWrapper';

// Redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { getInitialChannels } from '../utils/getInitialChannels';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
  channels: getInitialChannels(),
};

interface IAppState {
  readonly isLogged: boolean;
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware()
  ),
);

export class App extends React.PureComponent<any, IAppState> {
  static displayName = 'App';

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
      <Provider store={store}>
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
      </Provider>
    );
  }
}

