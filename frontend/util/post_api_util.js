export const fetchPosts = data => {
  return $.ajax({
    method: "GET",
    url: `/api/posts`,
    data
  });
};

export const fetchPost = id => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${id}`
  });
};

export const fetchComments = postId => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${postId}/comments`,
  });
};

export const createPost = post => {
  return $.ajax({
    method: "POST",
    url: "/api/posts",
    data: post,
    contentType: false,
    processData: false
  });
};

export const createComment = comment =>
  $.ajax({
    method: "POST",
    url: "api/comments",
    data: { comment }
  });

export const deleteComment = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`
  });
};

export const updatePost = post => {
  return $.ajax({
    method: "PATCH",
    url: `/api/posts/${post.id}`,
    data: { post }
  });
};

export const deletePost = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/posts/${id}`
  });
};
