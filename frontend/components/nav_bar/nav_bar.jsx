import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up!</Link>
        </nav>
    );

    const navBar = () => (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand core-sprite hide-text" href="#">Spidergram</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 ml-md-auto">
                        <input className="form-control mr-sm-2 text-center" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav ml-md-auto">
                        <li className="nav-item">
                            <a className="nav-link core-sprite upload-icon hide-text" href="#/upload"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link core-sprite notification-icon hide-text" href="#"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link core-sprite profile-icon hide-text" href="#"></a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success logout my-2 my-sm-0" type="submit" onClick={logout}>Log Out</button>
                </div>
            </div>
        </nav>
    );

    return currentUser ? navBar() : <div>You aren't logged in! Whoops</div>
};

export default NavBar;