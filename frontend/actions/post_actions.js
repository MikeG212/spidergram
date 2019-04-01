import * as PostApiUtil from '../util/post_api_util'

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_POST = "REMOVE_POST";

export const receivePosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts,
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const removePost = id => ({
    type: REMOVE_POST,
    postId: id
});



//thunks

export const createComment = (comment) => {
    return dispatch => {
        return PostApiUtil.createComment(comment).then(comment => {
            return dispatch(receiveComment(comment));
        })
    };
};

export const fetchPosts = () => {
    return dispatch => {
        return PostApiUtil.fetchPosts().then(posts => {
            return dispatch(receivePosts(posts));
        });
    };
};

export const fetchPost = (id) => {
    return dispatch => {
        return PostApiUtil.fetchPost(id).then(post => {
            return dispatch(receivePost(post));
        });
    };
};

export const createPost = (post) => {
    return dispatch => {
        return PostApiUtil.createPost(post).then(post => {
            return dispatch(receivePost(post));
        });
    };
};

export const updatePost = (post) => {
    return dispatch => {
        return PostApiUtil.updatePost(post).then(post => {
            return dispatch(receivePost(post));
        });
    };
};

export const deletePost = (id) => {
    return dispatch => {
        return PostApiUtil.deletePost(id).then(() => {
            return dispatch(removePost(id));
        });
    };
};