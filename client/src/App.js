import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoading from './utils/PageLoading';

let routes = [{
  exact: true,
  path: '/',
  component: () => import('./pages/HomePage'),
}, {
  path: '/user/register',
  component: () => import('./pages/user/RegisterPage'),
}, {
  path: '/user/login',
  component: () => import('./pages/user/LoginPage'),
}, {
  component: () => import('./pages/NotFoundPage'),
}];

let asyncRoutes = routes.map(({ path, component, ...rest}, idx) => (
  <Route
    key={path || idx}
    path={path}
    component={Loadable({
      loader: component,
      loading: PageLoading,
      delay: 300,
    })}
    {...rest}
  />
));

let App = () => (
  <BrowserRouter>
    <Switch>
      {asyncRoutes}
    </Switch>
  </BrowserRouter>
);

export default App;
