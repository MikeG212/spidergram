import merge from 'lodash/merge';

import {
    RECEIVE_POST,
    RECEIVE_COMMENT,
} from '../actions/post_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POST:
            return merge({}, state, action.comments);
        case RECEIVE_COMMENT:
            const { comment } = action;
    
            return merge({}, state, { [comment.id]: comment });
        default:
            return state;
    }
}

export default commentsReducer;