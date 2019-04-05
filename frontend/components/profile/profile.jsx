import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.renderPosts = this.renderPosts.bind(this);
    }

    renderPosts() {
        let posts = this.props.posts.map(post => {
            return (
                <li key={`image-${post.id}`} className="post-container">
                    <img
                        className="image"
                        key={`image-${post.id}`}
                        src={post.image_url} />
                </li>
            )
        })
        return posts.reverse();
    }

    render() {
        return (
            <div className="profile">
                <div className="user-profile">
                    <ul className="profile-info">
                        <li className="profile-pic-container">
                            <img className="profile-pic" />
                        </li>
                        <li className="profile-info-container">
                            <div className="name-and-edit-container">
                                <p className="username">{this.props.user.username}</p>
                                <a href="#/profile/edit">
                                    <button className="edit-profile-button">Edit Profile</button>
                                </a>
                            </div>
                            <div className="bio-container">
                                <p className="bio">{this.props.user.username}&#39;s Bio</p>
                                <p className="bio-text">{this.props.user.bio}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <span className="divider"></span>
                <ul className="profile-page-images">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }

}

export default Profile;