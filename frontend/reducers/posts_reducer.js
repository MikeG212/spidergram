import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  SET_POST
} from "../actions/post_actions";
import merge from "lodash/merge";

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      let postsCopy = JSON.parse(JSON.stringify(action.posts));
      Object.values(postsCopy).map(post => {
        delete post.comments;
      })
      return merge(newState, postsCopy);
    case RECEIVE_POST:
      const newPost = { [action.post.id]: action.post };
      return merge(newState, newPost);
    case RECEIVE_COMMENT:
      const comment = action.comment;
      newState[comment.post_id].commentIds.push(comment.id);
      return newState;
    case REMOVE_COMMENT:
      const commentToDelete = action.comment;
      const newCommentIds = newState[action.comment.post_id].commentIds.filter(id => id !== commentToDelete.id)
      newState[action.comment.post_id].commentIds = newCommentIds;
      return newState;
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    case SET_POST:
      newState[action.post.id] = action.post;
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
