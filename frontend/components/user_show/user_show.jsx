import React from 'react';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.renderUsername = this.renderUsername.bind(this)
    }

    componentDidMount() {
        this.props.requestUser(this.props.currentId);
    }

    renderUsername() {
        if (this.props.user) {
            let user = Object.values(this.props.user)[0];
            return <div className="currentUsername">{user.username}</div>;
        } else {
            return <div></div>;
        }
    }

    renderEmail() {
        if (this.props.user) {
            let user = Object.values(this.props.user)[0];
            return <div className="currentEmail">{user.email}</div>;
        } else {
            return <div></div>;
        }
    }

    //username
    //# of posts
    //email address
    //show posts in rows of 3
    render() {
        debugger
        return (
            <div className="user-show-container">
                <div className="user-show-header">
                    <div className="user-show-information">
                        <div className="username-header">
                            <div className="username-title">Username:{this.props.currentId}</div>
                            
                        </div>
                    </div>
                </div>
                <div className="currentEmailHolder">
                    {this.props.currentId}
                </div>
                <button onClick={()=> this.props.logout()}>Logout</button>
            </div>
        );
    }

}

export default UserShow;