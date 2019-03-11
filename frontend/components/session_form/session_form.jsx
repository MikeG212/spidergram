import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    // componentDidMount() {
    //     this.props.removeErrors();
    // }

    demoLogin() {
        this.setState({username: "johnJonah", email: "jj@dailybugle.com", password: "starwars"});
        const user = { username: "johnJonah", email: "jj@dailybugle.com", password: "starwars" };
    }

    demoLoginButton() {
        if (this.props.formType === "login") {
            return (
                <div className="login-guest-button">
                    <p>OR</p>
                    <button onClick={this.demoLogin}>Log in with Demo Account</button>
                </div>
            );
        }
    }

    render() {
        debugger
        return (
            <div className="login-form-container landing-right">
                <form onSubmit={this.handleSubmit} className="login-form-box form-login">
                    Welcome to Spidergram!
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <br />
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <br />
                        {this.demoLoginButton()}
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;