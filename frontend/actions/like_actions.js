import * as LikeApiUtil from "../util/like_api_util";
import { setPost } from "./post_actions.js";

export const createLike = like => dispatch => {
  return LikeApiUtil.createLike(like).then(post => {
    return dispatch(setPost(post));
  });
};

export const deleteLike = like => dispatch => {
  return LikeApiUtil.deleteLike(like).then(post => {
    return dispatch(setPost(post));
  });
};
