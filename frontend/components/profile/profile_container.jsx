import { connect } from 'react-redux';
import React from 'react';
import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
    const user = state.entities.users[state.session.id];
    let posts = [];

    if (user.posts) {
        posts = Object.values(user.posts);
    }

    return ({
        user: user,
        posts: posts
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        fetchUser: userId => dispatch(fetchUser(userId)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);