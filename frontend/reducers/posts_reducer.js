import { RECEIVE_POSTS, RECEIVE_POST, RECEIVE_POST, CLEAR_POSTS } from '../actions/post_actions';

const PostsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:
            return Object.assign({}, state, { [action.post.id]: action.post });
        case RECEIVE_POST:
            return { [action.post.id]: action.post };
        case CLEAR_POSTS:
            return {};
        default:
            return state;
    }
};

export default PostsReducer;