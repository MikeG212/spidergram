import { connect } from 'react-redux';
import React from 'react';
import { logout, } from '../../actions/session_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        currentUser: state.entities.users,
        userId: ownProps.match.params.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);