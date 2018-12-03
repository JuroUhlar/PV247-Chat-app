import * as React from 'react';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  createStore
} from 'redux';
import { rootReducer } from '../reducers/rootReducer';
// import { getInitialChannels } from '../../channels/utils/getInitialChannels';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppContainer } from '../containers/AppContainer';
import { BrowserRouter as Router } from 'react-router-dom';


const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
    )
  ),
);

export const AppWrapper: React.SFC = () => (
  <Router>
    <Provider store={store}>
      <div className="full-height">
        <AppContainer/>
      </div>
    </Provider>
  </Router>
);



