import React from 'react';
import ReactDOM from 'react-dom';
import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import ApiEngine from './utils/ApiEngine';
import cookieReducer from './ducks/cookie';
import apiEngineReducer, { setApiEngine } from './ducks/apiEngine';

let history = createBrowserHistory();
let rootReducer = combineReducers({
  form: formReducer,
  cookies: cookieReducer,
  apiEngine: apiEngineReducer,
});
let store = createStore(
  connectRouter(history)(rootReducer),
  {},
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
);
let apiEngine = new ApiEngine('http://localhost:3000');

store.dispatch(setApiEngine(apiEngine));

ReactDOM.render((
  <Provider store={store}>
    <App history={history} />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
