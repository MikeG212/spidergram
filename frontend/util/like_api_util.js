export const createLike = like => {
  debugger;
  return $.ajax({
    method: "POST",
    url: `api/likes`,
    data: { like }
  });
};

export const deleteLike = postId => {
  return $.ajax({
    method: "DELETE",
    url: `api/likes/${postId}`
  });
};
