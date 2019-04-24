import { connect } from "react-redux";
import React from "react";
import UserShow from "./user_show";
import { logout } from "../../actions/session_actions";
import { fetchUser } from "../../actions/user_actions";
import { fetchPosts } from "../../actions/post_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const userId = parseInt(ownProps.match.params.userId);
  const user = state.entities.users[userId];
  const posts =
    user && Object.keys(state.entities.posts).length > 0
      ? user.posts.map(postId => state.entities.posts[postId])
      : [];

  return {
    currentUser,
    userId,
    user,
    posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchPosts: () => dispatch(fetchPosts()),
    openModal: () => dispatch(openModal("post")),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
