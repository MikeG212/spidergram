import React from 'react';

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
                <div className="session-demo-button">
                    <p>OR</p>
                    <button className="session-button" onClick={this.demoLogin}>Log in with Demo Account</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="page">
                <div className="session-form-container group">
                    <img className="session-image" src="/"></img>
                    <div className="session-right-side">
                        <form onSubmit={this.handleSubmit} className="session-form-box">
                            <div className="sessionForm">
                                <h1>Welcome to Spidergram!</h1>
                                <div className="session-form-text">Please {this.props.formType} or {this.props.navLink}</div>
                                {this.renderErrors()}

                                    <label for="email">Email:
                                        <input type="text"
                                            value={this.state.email}
                                            onChange={this.update('email')}
                                            className="form-input"
                                        />
                                    </label>
                                    <br />
                                    <br />
                                    <label for="username">Username:
                                        <input type="text"
                                            value={this.state.username}
                                            onChange={this.update('username')}
                                            className="form-input"
                                        />
                                    </label>
                                    <br />
                                    <label for="password">Password:
                                        <input type="password"
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                            className="form-input"
                                        />
                                    </label>
                                    <br />
                                    <input className="session-button submit-button" type="submit" value={this.props.formType} />
                                    <br />
                                    {this.demoLoginButton()}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SessionForm;