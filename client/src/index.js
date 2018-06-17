import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import registerServiceWorker from './registerServiceWorker';
import PageLoading from './utils/PageLoading';
import NotFoundPage from './pages/NotFoundPage';

let routes = [{
  exact: true,
  path: '/',
  component: import('./pages/HomePage'),
}, {
  path: '/user/login',
  component: import('./pages/LoginPage'),
}];

let asyncRoutes = routes.map(({ path, component, ...rest}) => (
  <Route
    key={path}
    path={path}
    component={Loadable({
      loader: () => component,
      loading: PageLoading,
      delay: 300,
    })}
    {...rest}
  />
));

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      {asyncRoutes}
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
