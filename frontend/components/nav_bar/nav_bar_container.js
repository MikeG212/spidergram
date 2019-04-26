import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { requestUsers, clearSearchUsers } from '../../actions/search_actions.js';
import NavBar from './nav_bar';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        searchUsers: Object.values(state.entities.search)
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    requestUsers: (username) => dispatch(requestUsers(username)),
    clearSearchUsers: () => dispatch(clearSearchUsers()),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);