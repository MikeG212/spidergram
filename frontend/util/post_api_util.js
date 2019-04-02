export const fetchPosts = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/posts'
    });
};

export const fetchPost = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${id}`
    });
};

export const fetchComments = (postId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/comments/${postId}`,
        data: { postId }
    });
};

export const createPost = (post) => {
    return $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: { post }
    });
};

export const createComment = comment => (
    $.ajax({
        method: 'POST',
        url: 'api/comments',
        data: { comment }
    })
);

export const updatePost = (post) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/posts/${post.id}`,
        data: { post }
    });
};

export const deletePost = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/posts/${id}`,
    });
};