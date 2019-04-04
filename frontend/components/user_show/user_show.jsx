import React from 'react';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    //username
    //# of posts
    //email address
    //show posts in rows of 3
    render() {
        return (
            <div className="user-show-container">
                <div className="user-show-header">
                    <div className="user-show-information">
                        <div className="username-header">
                            <div className="username-title">Username:{this.props.user.username}</div>
                            
                        </div>
                    </div>
                </div>

                <div className="currentEmailHolder">
                    {this.props.user.email}
                </div>
                <button onClick={()=> this.props.logout()}>Logout</button>
            </div>
        );
    }

}

export default UserShow;