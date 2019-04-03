import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_COMMENT } from '../actions/post_actions';
import merge from 'lodash/merge';

const PostsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return merge({}, state, action.posts); 
        case RECEIVE_POST:
            const newPost = { [action.post.id]: action.post };
            return merge({}, state, newPost);
        case RECEIVE_COMMENT:
    
            const comment = action.comment;
            let newState = merge({}, state);
            newState[comment.post_id].commentIds.push(comment.id); //newState is not properly merging and the comment is being nested THX
            return newState;
        case REMOVE_POST:
            const deletedState = merge({}, state);
            delete deletedState[action.postId];
            return deletedState;
        default:
            return state;
    }
};

export default PostsReducer;