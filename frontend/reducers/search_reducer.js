import {
    RECEIVE_SEARCH_USERS
} from "../actions/user_actions";
import merge from "lodash/merge";

const PostsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_SEARCH_USERS:
            return action.users;
        default:
            return state;
    }
};

export default PostsReducer;