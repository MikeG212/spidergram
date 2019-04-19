import React from "react";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout, history } = this.props;
    return (
      <nav className="navBar">
        <div
          className="navBar-logo navbar-brand core-sprite main-logo"
          onClick={() => this.props.history.push("/")}
        />

        <div className="icons-group">
          <div
            className="nav-link core-sprite upload-icon hide-text nav-bar-icons"
            onClick={() => history.push("/upload")}
          />
          <div
            className="nav-link core-sprite profile-icon hide-text nav-bar-icons"
            onClick={() => history.push(`/users/${currentUser.id}`)}
          />
          <img
            className="logout-icon nav-bar-icons"
            src={window.images.logout_icon}
            alt="Log out"
            onClick={() => logout()}
          />
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
