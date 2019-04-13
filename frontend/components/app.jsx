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
import ProfileContainer from './profile/profile_container'
import CreatePostFormContainer from './post/create_post_form_container';
import PostShowContainer from './post/post_show_container';
import PostIndexContainer from './post/post_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="boss-div">
    <NavBarContainer />
    <Switch>
      
      <AuthRoute path="/login" component= { SessionFormContainer } />
      <AuthRoute path="/signup" component= { SessionFormContainer } />
      <ProtectedRoute path='/profile' component={ProfileContainer} />
      <ProtectedRoute path= "/users/:userId" component= { ProfileContainer } />
      <ProtectedRoute path="/posts/:postId" component= { PostShowContainer } />
      <ProtectedRoute path="/upload" component= { CreatePostFormContainer }/>
      <ProtectedRoute exact path='/' component={ PostIndexContainer } />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;