import merge from 'lodash/merge';
import { RECEIVE_USERS, CLEAR_SEARCH_USERS } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users;
        case CLEAR_SEARCH_USERS:
            return {};
        default:
            return state;
    }
};

export default SearchReducer;