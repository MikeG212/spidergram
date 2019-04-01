import { RECEIVE_ALL_POSTS, RECEIVE_POST, RECEIVE_COMMENT, REMOVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return merge({}, state, action.posts);
        case RECEIVE_POST:
            const newPost = { [action.post.id]: action.post };
            return merge({}, state, newPost);
        case RECEIVE_COMMENT:
            // receive comment stuff
            return nextState;
        case REMOVE_POST:
            const newState = merge({}, oldState);
            delete newState[action.postId]
            return newState;
        default:
            return state;
    }
};

export default postsReducer;