export const fetchPosts = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/posts',
    });
};

export const fetchPost = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${id}`
    });
};

export const createComment = comment => {
    return $.ajax({
        method: 'POST',
        url: `/api/comments`,
        data: { comment }
    });
};

export const createPost = postForm => {
    return $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: postForm,
        contentType: false,
        processData: false
    });
};

export const updatePost = post => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/posts/${post.id}`,
        data: { post },
    });
};

export const deletePost = id => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/posts/${id}`,
        data: { post },
    });
};