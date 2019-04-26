import React from "react";
import { withRouter } from "react-router-dom";
import Search from './search';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout, history } = this.props;
    return (
      <div className="navBar">
        <div
          className="navBar-logo core-sprite main-logo"
          onClick={() => this.props.history.push("/")}
        />
        <Search
          clearSearchUsers={this.props.clearSearchUsers}
          requestUsers={this.props.requestUsers}
          searchUsers={this.props.searchUsers}
        />
        <div className="navBar-icons-group">
          <div
            className="core-sprite upload-icon hide-text navBar-icon"
            onClick={() => history.push("/upload")}
          />
          <div
            className="core-sprite profile-icon hide-text navBar-icon"
            onClick={() => history.push(`/users/${currentUser.id}`)}
          />
          <img
            className="logout-icon navBar-icon"
            src={window.images.logout_icon}
            alt="Log out"
            onClick={() => logout()}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
