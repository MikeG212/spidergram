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

    render() {
        return (
            <div>
                {/* {this.renderUsername()} */}
                <div className="currentUsernameHolder">
                    Username:
                    {this.renderUsername()}
                </div>
                <button onClick={()=> this.props.logout()}>Logout</button>
            </div>
        );
    }

}

export default UserShow;