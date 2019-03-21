import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    render() {
        return (
            <button onClick={()=> this.props.logout()}>Logout</button>
        )
    }

}

export default Profile;