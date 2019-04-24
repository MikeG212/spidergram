import { connect } from "react-redux";
import PostShowModal from "./post_show_modal";
import { createLike, deleteLike } from "../../actions/like_actions";
import { removeComment } from "../../actions/post_actions";
import { fetchPost } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  posts: state.posts,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id)),
  removeComment: commentId => dispatch(removeComment(commentId)),
  createLike: postId => dispatch(createLike(postId)),
  deleteLike: postId => dispatch(deleteLike(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShowModal);
