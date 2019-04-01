import {
    RECEIVE_POST,
    RECEIVE_COMMENT,
} from '../actions/post_actions';
import merge from 'lodash/merge'

const commentsReducer = (state = {}, action) => {
    let nextState;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POST:
            nextState = merge({}, state);
            return merge({}, state, action.comments);
        case RECEIVE_COMMENT:
            return merge({}, state, { [action.comment.id]: action.comment });
        default:
            return state;
    }
};

export default commentsReducer;