import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const REQUEST_USERS = "REQUEST_USERS";
export const CLEAR_SEARCH_USERS = "CLEAR_SEARCH_USERS";

export const receiveUsers = (payload) => ({
    type: RECEIVE_USERS,
    users: payload
});

export const clearSearchUsers = () => ({
    type: CLEAR_SEARCH_USERS,
});

// create thunk action creator to fetch all users

export const requestUsers = searchTerm => {
    return dispatch => {
        return SearchApiUtil.fetchUsers(searchTerm).then(users => {
            return dispatch(receiveUsers(users));
        });
    };
};