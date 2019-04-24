import { connect } from "react-redux";
import PostIndex from "./post_index";
import { fetchPosts, deletePost } from "../../actions/post_actions";
import { removeComment, fetchComments } from "../../actions/post_actions";
import { createLike, deleteLike } from "../../actions/like_actions";

const mapStateToProps = state => {
  debugger
  let posts = [];
  if (state.entities.posts) {
    posts = JSON.parse(JSON.stringify(state.entities.posts));
    posts = Object.values(posts);
    posts.forEach(post => {
      post.comments = post.commentIds.map(commentId => {
        return state.entities.comments[commentId];
      }).filter(comment => comment);
    })
  }
  debugger
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    posts: posts,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: id => dispatch(deletePost(id)),
    removeComment: commentId => dispatch(removeComment(commentId)),
    fetchComments: postId => dispatch(fetchComments(postId)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: postId => dispatch(deleteLike(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
