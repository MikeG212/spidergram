import merge from "lodash/merge";

import { RECEIVE_POST, RECEIVE_COMMENT, RECEIVE_COMMENTS, RECEIVE_ALL_POSTS } from "../actions/post_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_POST:
      return merge(newState, action.comments);
    case RECEIVE_COMMENT:
      const { comment } = action;
      return merge(newState, { [comment.id]: comment });
    // case RECEIVE_ALL_POSTS:
    //   const { post } = action;
    //   if (post.comments.length > 0) {
    //     return merge(newState, { [post.id]: post.comments });
    //   }
    //   return newState;
    default:
      return state;
  }
};

export default commentsReducer;
