import { connect } from 'react-redux';
import React from 'react';
import { login, signup, logout } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
    
    errors: session.errors,
    loggedIn: Boolean(session.currentUser),
});

const mapDispatchToProps = (dispatch, ownProps) => {
    const formType = ownProps.location.pathname.slice(1);
    const processFrom = (formType === 'login') ? login : signup;

    return {
        processForm: (user) => dispatch(processFrom(user)),
        formType
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);