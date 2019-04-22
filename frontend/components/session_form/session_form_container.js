import { connect } from "react-redux";
import React from "react";
import { login, signup, removeErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
  debugger;
  return {
    errors: state.errors.session,
    loggedIn: Boolean(state.session.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processFrom = formType === "login" ? login : signup;
  debugger;
  return {
    processForm: user => dispatch(processFrom(user)),
    removeErrors: () => dispatch(removeErrors()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
