import React from 'react';
import { connect } from 'react-redux';

const Comment = ({ comment, user }) => {
    const { body } = comment;
    return (
        <li>{body} - by {user.username}</li>
    );
};

const mapStateToProps = ({ entities: { users } }, { comment }) => {
    return {
        user: users[comment.user_id]
    };
};

export default connect(mapStateToProps)(Comment);