import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Header from './Header';
// import Post from './Post';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session_form/session_form_container.jsx';
// import UserShowContainer from './user_show/user_show_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({ children }) => { 
  return (<div>
    <Header />
    <NavBarContainer />
    {children}
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/"/>
    </Switch>
  </div>);
}

export default App;