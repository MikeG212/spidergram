import merge from "lodash/merge";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_POST } from "../actions/post_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge(newState, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return merge(newState, { [action.user.id]: action.user });
    case RECEIVE_POST:
      return merge(newState, action.users);
    default:
      return state;
  }
};

export default usersReducer;
