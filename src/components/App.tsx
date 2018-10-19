import * as React from 'react';
// import { LoginPage } from './LoginPage';
import { ContentWrapper } from './ContentWrapper';

export class App extends React.PureComponent {

  render(): JSX.Element {
    return (
      <div>
        {/* <LoginPage /> */}
        <ContentWrapper />
      </div>
    );
  }
}

