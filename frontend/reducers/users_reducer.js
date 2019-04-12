import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_COMMENT, RECEIVE_POST } from '../actions/post_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge(newState, { [action.currentUser.id]: action.currentUser });
        // case RECEIVE_COMMENT:
        //     return merge(newState, { [action.comment.username]: action.comment.user_id.username });
        case RECEIVE_POST:
            return merge(newState, action.users);
        default:
            return state;
    }
};

export default usersReducer;