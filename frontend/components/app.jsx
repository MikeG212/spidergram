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
import PostIndexContainer from './post_index/post_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = (props) => (
  <div className="boss-div">
    <ProtectedRoute component={NavBarContainer} />
    <Switch>
      <AuthRoute exact path="/login" component={ SessionFormContainer } />
      <AuthRoute exact path="/signup" component={ SessionFormContainer } />
      <Route exact path='/' component={PostIndexContainer} />
    </Switch>
  </div>
);


export default App;