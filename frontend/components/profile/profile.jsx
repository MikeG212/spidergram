import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.renderPosts = this.renderPosts.bind(this);
    this.renderFollowingButton = this.renderFollowingButton.bind(this);
  }

  componentDidMount() {
    const { userId, fetchUser, fetchPosts } = this.props;
    fetchUser(userId);
    fetchPosts();
  }

  renderPosts() {
    let posts = [];
    debugger;
    if (this.props.posts.length > 0) {
      posts = this.props.posts.map(post => {
        debugger;
        return (
          <li key={`image-${post.id}`} className="post-container">
            <img
              className="image"
              key={`image-${post.id}`}
              src={post.image_url}
            />
          </li>
        );
      });
    }
    return posts.reverse();
  }

  renderFollowingButton() {}

  render() {
    const { user } = this.props;
    if (this.props.user) {
      return (
        <div className="profile">
          <div className="user-profile">
            <ul className="profile-info">
              <li className="profile-pic-container">
                <img className="profile-pic" />
              </li>
              <li className="profile-info-container">
                <div className="name-and-edit-container">
                  <p className="username">{user.username}</p>
                  <a href="#/profile/edit">
                    <button className="edit-profile-button">
                      Edit Profile
                    </button>
                  </a>
                </div>
                <div className="bio-container">
                  <p className="bio">{user.username}&#39;s Bio</p>
                  <p className="bio-text">{user.bio}</p>
                </div>
              </li>
            </ul>
          </div>
          <span className="divider" />
          <ul className="profile-page-images">{this.renderPosts()}</ul>
        </div>
      );
    } else {
      return <div className="nullUser" />;
    }
  }
}

export default Profile;
