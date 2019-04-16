import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment, removeComment } from "../../actions/post_actions";

const mapStateToProps = state => {
  debugger;
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment)),
    removeComment: commentId => dispatch(removeComment(commentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
