import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const PostsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = {};
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return merge({}, action.posts);
        case RECEIVE_POST:
            const newPost = { [action.post.id]: action.post };
            return merge({}, state, newPost);
        case REMOVE_POST:
            nextState = merge({}, state);
            delete nextState[action.postId];
            return nextState;
        default:
            return state;
    }
};

export default PostsReducer;