import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_COMMENT } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions'
import merge from 'lodash/merge';

const PostsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return merge({}, state, action.posts); 
        case RECEIVE_POST:
            const newPost = { [action.post.id]: action.post };
            return merge(newState, newPost);
        case RECEIVE_COMMENT:
            const { comment } = action;
            newState[action.comment.post].commentIds.push(comment.id);
            return newState;
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        case RECEIVE_LIKE:
            newState[action.like.imageId].likerIds.push(action.like.userId);
            return newState;
        case REMOVE_LIKE:
            newState[action.like.imageId] = newState[action.like.imageId].likerIds.filter(id => id !== action.like.userId)
            return newState;
        default:
            return state;
    }
};

export default PostsReducer;