export const createLike = like => {
  return $.ajax({
    method: "POST",
    url: "api/likes",
    data: { like }
  });
};

export const deleteLike = userId => {
  return $.ajax({
    method: "DELETE",
    url: `api/likes/${userId}`
  });
};
