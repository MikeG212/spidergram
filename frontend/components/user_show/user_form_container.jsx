import { connect } from "react-redux";
import React from "react";
import { updateUser } from "../../actions/user_actions";
import UserForm from "./user_form";

const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[state.session.id];

    return {
        user: user,
        errors: state.entities.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: user => dispatch(updateUser(user)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);