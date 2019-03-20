import { RECEIVE_POSTS, RECEIVE_POST, CLEAR_POSTS } from '../actions/post_actions';
import merge from 'lodash/merge';

const PostsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:
            const newPost = { [action.post.id]: action.post };
            return merge({}, state, newPost);
        case CLEAR_POSTS:
            return {};
        default:
            return state;
    }
};

export default PostsReducer;