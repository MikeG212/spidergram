import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_COMMENT, RECEIVE_POST } from '../actions/post_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { id: action.currentUser });
        case RECEIVE_COMMENT:
            return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_POST:
            return merge({}, state, action.users);
        default:
            return state;
    }
};

export default usersReducer;