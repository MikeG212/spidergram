import { connect } from "react-redux";
import PostIndex from "./post_index";
import { fetchPosts, deletePost } from "../../actions/post_actions";
import { createComment, removeComment } from "../../actions/post_actions";
import { createLike, deleteLike } from "../../actions/like_actions";

const mapStateToProps = state => {
  let posts = [];
  if (state.entities.posts) {
    posts = Object.values(state.entities.posts);
  }

  return {
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    posts: posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: id => dispatch(deletePost(id)),
    createComment: comment => dispatch(createComment(comment)),
    removeComment: commentId => dispatch(removeComment(commentId)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: (post_id, user_id) => dispatch(deleteLike(post_id, user_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
