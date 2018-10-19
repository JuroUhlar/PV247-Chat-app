import * as React from 'react';
import { LoginPage } from './LoginPage';

export class App extends React.PureComponent {

  render(): JSX.Element {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
}

