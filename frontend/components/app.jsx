import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session_form/session_form_container';
import EditPostFormContainer from './post/edit_post_form_container';
import PostShowContainer from './post/post_show_container';
import PostIndexContainer from './post/post_index_container';
import UserShowContainer from './user_show/user_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = (props) => (
  <div className="boss-div">
    <ProtectedRoute component={NavBarContainer} />
    <Switch>
      <AuthRoute exact path="/login" component= { SessionFormContainer } />
      <AuthRoute exact path="/signup" component= { SessionFormContainer } />
      <ProtectedRoute exact path= "/users/:userId" component= { UserShowContainer } />
      <ProtectedRoute exact path="/" component= { PostIndexContainer } />
      <ProtectedRoute exact path="/posts/:postId" component= { PostShowContainer } />
      <ProtectedRoute path="/posts/:postId/edit" component= { EditPostFormContainer }/>
      <ProtectedRoute path="/upload" component= { EditPostFormContainer }/>

    </Switch>
  </div>
);

export default App;