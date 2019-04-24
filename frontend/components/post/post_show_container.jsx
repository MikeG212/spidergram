import { connect } from "react-redux";
import PostShow from "./post_show";
import { createLike, deleteLike } from "../../actions/like_actions";
import { removeComment } from "../../actions/post_actions";
import { fetchPost } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUser: state.entities.users[state.session.id],
    post: state.entities.posts[ownProps.match.params.postId],
    postId: ownProps.match.params.postId
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
