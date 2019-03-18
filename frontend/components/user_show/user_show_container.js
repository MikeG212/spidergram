import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import UserShow from './user_show';

// const mapStateToProps = ({ session }) => ({

//     errors: session.errors,
//     loggedIn: Boolean(session.currentUser),
// });

const mapDispatchToProps = dispatch => {

    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mapDispatchToProps)(UserShow);