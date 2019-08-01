import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.submitButton = this.submitButton.bind(this);
    this.renderInputFields = this.renderInputFields.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.navLink = this.navLink.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  navLink() {
    if (this.props.formType === "login") {
      return (
        <p className="session-form-box signup-box">
          Don't have an account? &nbsp;
          <Link to="/signup">Sign up</Link>
        </p>
      );
    } else {
      return (
        <p className="session-form-box signup-box">
          Already have an account? &nbsp;
          <Link to="/login">Log in</Link>
        </p>
      );
    }
  }

  renderErrors() {
    return (
      <ul className="errors-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderInputFields() {
    if (this.props.formType === "login") {
      return (
        <div className="login-fields">
          <label htmlFor="email">
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
              className="form-input"
            />
          </label>
        </div>
      );
    } else {
      return (
        <div className="signup-fields">
          <label htmlFor="email">
            <input
              type="email"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
              className="form-input"
            />
          </label>
          <label htmlFor="username">
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
              className="form-input"
            />
          </label>
        </div>
      );
    }
  }

  demoLogin() {
    this.setState({
      username: "johnJonah",
      email: "jj@dailybugle.com",
      password: "starwars"
    });
  }

  demoLoginButton() {
    if (this.props.formType === "login") {
      return (
        <div className="session-demo-button">
          <p className="or">OR</p>
          <button className="session-button" onClick={this.demoLogin}>
            Log in with Demo Account
          </button>
        </div>
      );
    }
  }

  submitButton() {
    if (this.props.formType === "login") {
      return <input className="session-button" type="submit" value="Log in" />;
    } else {
      return <input className="session-button" type="submit" value="Sign up" />;
    }
  }

  render() {
    return (
      <div className="session-form-container">
        <div className="landing-left">
          <img
            className="login-asset"
            src={window.images.dummyPhoneNoAnimate}
            alt="dummyPhone"
          />
        </div>
        <div className="landing-right">
          <form onSubmit={this.handleSubmit} className="session-form-box">
            <img className="logo" src={window.images.logo} alt="logo" />
            <div className="session-form toggle">
              Come see photos of your friendly neighborhood
              <br />
              Spider-Man.
            </div>
            <br />
            <br />
            {this.renderInputFields()}
            <label htmlFor="password">
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                className="form-input"
              />
            </label>
            <br />
            {this.submitButton()}
            <br />
            {this.demoLoginButton()}
            {this.renderErrors()}
          </form>
          {this.navLink()}
        </div>
      </div>
    );
  }
}

export default SessionForm;
