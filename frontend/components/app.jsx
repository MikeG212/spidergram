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
import CreatePostFormContainer from './post/create_post_form_container';
import PostShowContainer from './post/post_show_container';
import PostIndexContainer from './post/post_index_container';
import UserShowContainer from './user_show/user_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="boss-div">
    <header>
      <Link to="/" className="header-link">
        <h1>Spidergram</h1>
      </Link>
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component= { SessionFormContainer } />
      <AuthRoute path="/signup" component= { SessionFormContainer } />
      <ProtectedRoute path= "/users/:userId" component= { UserShowContainer } />
      <ProtectedRoute path="/posts/:postId" component= { PostShowContainer } />
      <ProtectedRoute path="/posts/new" component= { CreatePostFormContainer }/>
      <Route exact path='/' component={ PostIndexContainer } />
    </Switch>
  </div>
);

export default App;