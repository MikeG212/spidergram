import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container.jsx';
import LoginFormContainer from './session_form/login_form_container.jsx';
// import PhotoShowContainer from './photo_show/photo_show_container';
// import UserShowContainer from './user_show/user_show_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({ children }) => { 
  debugger 
  return (<div>
    <header>
      <h1>Spidergram The APP.jsx</h1>
      <GreetingContainer />
      {children}
    </header>

    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      {/* <ProtectedRoute exact path="/photo/new"/> */}
      <Route exact path="/"/>
    </Switch>
  </div>);
}

export default App;