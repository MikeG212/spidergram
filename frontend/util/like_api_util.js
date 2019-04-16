export const createLike = postId => {
  $.ajax({
    method: "POST",
    url: `api/posts/${postId}/like`
  });
};

export const destroyLike = postId => {
  $.ajax({
    method: "DELETE",
    url: `api/posts/${postId}/unlike`
  });
};
