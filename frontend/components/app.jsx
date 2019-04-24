import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SessionFormContainer from "./session_form/session_form_container";
import UserShowContainer from "./user_show/user_show_container";
import UserFormContainer from "./user_show/user_form_container";
import CreatePostFormContainer from "./post/create_post_form_container";
import PostShowContainer from "./post/post_show_container";
import PostIndexContainer from "./post/post_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div className="boss-div">
    <Modal />
    <ProtectedRoute component={NavBarContainer} />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/users/:userId/edit" component={UserFormContainer} />
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <ProtectedRoute path="/upload" component={CreatePostFormContainer} />
      <ProtectedRoute path="/posts/:postId" component={PostShowContainer} />
      <ProtectedRoute exact path="/" component={PostIndexContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
