import { connect } from "react-redux";
import PostShow from "./post_show";
import { createLike, deleteLike } from "../../actions/like_actions";
import { removeComment, fetchPost } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.options.userId];
  let post = state.entities.posts[ownProps.options.postId];
  if (post) {
    post = JSON.parse(JSON.stringify(post));
    post.comments = post.commentIds.map(commentId => {
      return state.entities.comments[commentId];
    }).filter(comment => comment);
  }
  return {
    user: user,
    post: post,
    userId: ownProps.options.userId,
    postId: ownProps.options.postId,
    currentUser: state.entities.users[state.session.id]
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
