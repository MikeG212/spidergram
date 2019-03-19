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

    navLink() {
        if (this.props.formType === "login") {
            return <Link to="/signup">sign up</Link>;
        } else {
            return <Link to="/login">log in</Link>;
        }
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

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/'));
    }

    // componentDidMount() {
    //     this.props.removeErrors();
    // }

    demoLogin() {
        this.setState({username: "johnJonah", email: "jj@dailybugle.com", password: "starwars"});
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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 landing-left">
                            <div className="dummy-phone">
                                <div className="screen-shot">
                                    <div className="carousel carousel-fade" data-ride="carousel" >
                                        <div className="carousel-inner">
                                            <img className="carouse-item active screen-shot" src={window.images.screenshot1} alt="dummyPhone1"></img>
                                            <img className="carousel-item screen-shot" src={window.images.screenshot2} alt="dummyPhone2"></img>
                                            <img className="carousel-item screen-shot" src={window.images.screenshot3} alt="dummyPhone3"></img>
                                            <img className="carousel-item screen-shot" src={window.images.screenshot4} alt="dummyPhone4"></img>
                                            <img className="carousel-item screen-shot" src={window.images.screenshot5} alt="dummyPhone5"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 landing-right text-center d-flex align-items-center">
                            <div className="session-form-container">
                                <form onSubmit={this.handleSubmit} className="session-form-box">
                                <h3>Spidergram</h3>
                                    <div className="session-form text">Please {this.props.formType} or {this.navLink()}</div>
                                    {this.renderErrors()}
                                        <label htmlFor="email">Email:
                                            <input type="text"
                                                value={this.state.email}
                                                onChange={this.update('email')}
                                                className="form-input"
                                            />
                                        </label>
                                        <br />
                                        <label htmlFor="username">Username:
                                            <input type="text"
                                                value={this.state.username}
                                                onChange={this.update('username')}
                                                className="form-input"
                                            />
                                        </label>
                                        <br />
                                        <label htmlFor="password">Password:
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}

export default SessionForm;