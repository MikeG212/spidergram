import React from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props){
        super(props);

        this.showNavBar = this.showNavBar.bind(this);
        this.handleUserShow = this.handleUserShow.bind(this);
    }

    handleUserShow() {
        this.props.history.push(`/user/${this.props.currentUser.id}`);
    }

    showNavBar(){
        return (
            <div className="navBar">
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
                            <button className="btn btn-outline-success logout my-2 my-sm-0" type="submit" onClick={() => this.props.logout()}>Log Out</button>
                        </div>
                    </div>
                </nav>
            </div>
        );

    }

    render() {
        if (this.props.currentUser) {
            return this.showNavBar();
        } else {
            return (<div className="empty-nav-container"></div>)
        }
    }
}

export default withRouter(NavBar);