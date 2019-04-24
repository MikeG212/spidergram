import { connect } from "react-redux";
import PostShow from "./post_show";
import { createLike, deleteLike } from "../../actions/like_actions";
import { removeComment } from "../../actions/post_actions";
import { fetchPost } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
  debugger
  const user = state.entities.users[ownProps.options.userId];
  const post = state.entities.posts[ownProps.options.postId];
  return {
    user: user,
    post: post,
    userId: ownProps.options.userId,
    posttId: ownProps.options.posttId,
    currentUserId: state.session.id
  };
};
const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id)),
  removeComment: commentId => dispatch(removeComment(commentId)),
  createLike: postId => dispatch(createLike(postId)),
  deleteLike: postId => dispatch(deleteLike(postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
