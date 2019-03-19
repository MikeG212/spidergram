import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({ children }) => (
  <div>
    <ProtectedRoute component={NavBarContainer} />
    {children}
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Redirect to="/login" />
    </Switch>
  </div>
);


export default App;