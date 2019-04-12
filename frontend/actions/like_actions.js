import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like: like
});

const removeLike = like => ({
    type: REMOVE_LIKE,
    like: like
});

export const createLike = (like) => {
    return dispatch => {
        return LikeAPIUtil.createLike(like).then(like => {
            return dispatch(receiveLike(like));
        });
    };
};

export const deleteLike = (userId) => {
    debugger
    return dispatch => {
        return LikeAPIUtil.deleteLike(userId).then(like => {
            return dispatch(removeLike(like));
        });
    };
};