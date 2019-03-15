export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const REQUEST_POST = "REQUEST_POST";
export const CREATE_POST = "CREATE_POST";
export const RECEIVE_SINGLE_POST = "RECEIVE_SINGLE_POST";
export const CLEAR_POSTS = "CLEAR_POSTS";

export const requestPosts = () => ({
    type: REQUEST_POSTS
});

export const requestPost = id => ({
    type: REQUEST_POST,
    id
});

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const createPost = (post, success) => ({
    type: CREATE_POST,
    success,
    post
});

export const receiveSinglePost = post => ({
    type: RECEIVE_SINGLE_POST,
    post
});

export const clearPosts = () => ({
    type: CLEAR_POSTS
});