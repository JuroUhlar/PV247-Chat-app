import * as React from 'react';
import * as PropTypes from 'prop-types';
import { LoginPage } from './LoginPage';
import { ContentWrapperContainer } from '../../channels/containers/ContentWrapperContainer';
import { Route, RouteComponentProps } from 'react-router';
import { CONTENT_VIEW_ROUTE, LOGIN_ROUTE } from '../constants/routes';
import { withRouterPropTypes } from '../utils/routerProps';

export interface IAppCallbackProps {
  readonly onLogin: (name: string) => void;
}

export interface IAppDataProps extends RouteComponentProps {
  readonly isLogged: boolean;
}

export type AppProps = IAppCallbackProps & IAppDataProps;

export class App extends React.PureComponent<AppProps> {
  static displayName = 'App';

  static propTypes = {
    ...withRouterPropTypes,
    onLogin: PropTypes.func.isRequired,
  };

  constructor(props: any) {
    super(props);
  }

  _onLoginClick = () => {
    this.props.onLogin('');
  };

  render(): JSX.Element {
    // const { isLogged } = this.props;
    return (
      <div className="full-height">
        {/*{isLogged ?*/}
        <Route
          path={CONTENT_VIEW_ROUTE}
          location={this.props.history.location}
          component={ContentWrapperContainer}
        />
        {/*:*/}
        <Route
          exact
          location={this.props.history.location}
          path={LOGIN_ROUTE}
          component={LoginPage}
          onLogInClick={this._onLoginClick}
        />
        {/*}*/}
      </div>
    );
  }
}

