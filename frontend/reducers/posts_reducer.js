import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_COMMENT } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions'
import merge from 'lodash/merge';

const PostsReducer = (state = {}, action) => {
    debugger
    Object.freeze(state)
    let newState = merge({}, state);
    debugger
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return merge({}, state, action.posts); 
        case RECEIVE_POST:
            const newPost = { [action.post.id]: action.post };
            return merge(newState, newPost);
        case RECEIVE_COMMENT:
            if (!newState[action.comment.post_id].comments) {
                newState[action.comment.post_id].comments = {};
            }
            const { comment } = action;
            newState[action.comment.post_id].comments[comment.id] = comment;
            return newState;
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        case RECEIVE_LIKE:
            debugger
            newState[action.like.post_id].likers.push(action.like.userId);
            return newState;
        case REMOVE_LIKE:
            newState[action.like.postId] = newState[action.like.postId].likers.filter(id => id !== action.like.userId)
            return newState;
        default:
            return state;
    }
};

export default PostsReducer;