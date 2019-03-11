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
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container.jsx';
import LoginFormContainer from './session_form/login_form_container.jsx';
// import PhotoShowContainer from './photo_show/photo_show_container';
// import UserShowContainer from './user_show/user_show_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({ children }) => { 
  debugger 
  return (<div>
    <Header />
    <GreetingContainer />
    {/* <Post username="peterParker" caption="All black everything"/> */}
      {children}

    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      {/* <ProtectedRoute exact path="/photo/new"/> */}
      <Route exact path="/"/>
    </Switch>
  </div>);
}

export default App;