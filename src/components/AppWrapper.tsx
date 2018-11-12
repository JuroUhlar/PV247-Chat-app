import * as React from 'react';
// Redux stuff
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {AppContainer} from '../containers/AppContainer';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware()
  ),
);

export const AppWrapper: React.SFC = () => (
  <Provider store={store}>
    <div className="full-height">
      <AppContainer/>
    </div>
  </Provider>
);



