import * as PostApiUtil from '../util/post_api_util'

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const fetchPosts = () => {
    return dispatch => {
        return PostApiUtil.fetchPosts().then(posts => {
            return dispatch({type: RECEIVE_ALL_POSTS, posts: posts });
        });
    };
};

export const fetchPost = (id) => {
    return dispatch => {
        return PostApiUtil.fetchPost(id).then(post => {
            return dispatch({ type: RECEIVE_POST, post: post });
        });
    };
};

export const createPost = (post) => {
    return dispatch => {
        return PostApiUtil.createPost(post).then(postFromServer => {
            return dispatch({ type: RECEIVE_POST, post: postFromServer });
        });
    };
}; 

export const updatePost = (post) => {
    return dispatch => {
        return PostApiUtil.updatePost(post).then(postFromServer => {
            return dispatch({ type: RECEIVE_POST, post: postFromServer });
        });
    };
};

export const deletePost = (id) => {
    return dispatch => {
        return PostApiUtil.deletePost(id).then(() => {
            return dispatch({ type: REMOVE_POST, postId: id });
        });
    };
};

export const createComment = (comment) => {
    return dispatch => {
        return PostApiUtil.createComment(comment).then(comment => {
            return dispatch(receiveComment(comment));
        });
    };
};

export const receiveComment = ({ comment, body, user }) => ({
    type: RECEIVE_COMMENT,
    comment,
    body,
    user,
});