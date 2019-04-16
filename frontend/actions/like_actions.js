export const CREATE_LIKE = "CREATE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const createLike = like => {
  debugger;
  return {
    type: CREATE_LIKE,
    like
  };
};

export const deleteLike = postId => {
  debugger;
  return {
    type: REMOVE_LIKE,
    postId
  };
};
