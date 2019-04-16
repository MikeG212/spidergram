import merge from "lodash/merge";

import { RECEIVE_POST, RECEIVE_COMMENT } from "../actions/post_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_POST:
      return merge(newState, action.comments);
    case RECEIVE_COMMENT:
      debugger;
      const { comment } = action;
      return merge(newState, { [comment.id]: comment });
    default:
      return state;
  }
};

export default commentsReducer;
