import React from "react";
import { withRouter } from "react-router-dom";

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      currentImage: null,
      posts: []
    };
    this.renderPosts = this.renderPosts.bind(this);
    this.renderEditButton = this.renderEditButton.bind(this);
  }

  componentDidMount() {
    const { userId, fetchUser, fetchPosts } = this.props;
    fetchUser(userId);
    fetchPosts();
  }

  postText() {
    return this.props.user.posts.length === 1 ? (
      <span className="post-stats"> post</span>
    ) : (
        <span className="post-stats"> posts</span>
      );
  }

  renderPosts() {
    let posts = [];
    if (this.props.posts.length > 0) {
      posts = this.props.posts.map(post => {
        return (
          <li key={`image-${post.id}`} className="user-show-post-container">
            <img
              className="user-show-image"
              src={post.image_url}
              onClick={() => this.props.openModal({ userId: this.props.user.id, post_id: post.id })}
            // onClick={() => this.props.history.push(`/posts/${post.id}`)}
            />
          </li>
        );
      });
    }
    return posts.reverse();
  }

  renderEditButton() {
    if (this.props.currentUser.id === this.props.userId) {
      return (
        <button
          className="edit-button"
          onClick={() =>
            this.props.history.push(`/users/${this.props.userId}/edit`)
          }
        >
          Edit Profile
        </button>
      );
    }
  }

  render() {
    const { user } = this.props;
    if (user) {
      return (
        <div className="user-show-container">
          <div className="user-show-header">
            <ul className="user-show-info">
              <li className="profile-pic-container">
                <img className="profile-pic" src={user.avatar_url} />
              </li>
              <li className="user-show-info-container">
                <p className="user-show-username">{user.username}</p>
                <div className="user-stats">
                  <span className="stat-number">
                    {this.props.user.posts.length}
                  </span>
                  {this.postText()}
                  {this.renderEditButton()}
                </div>
                <div className="bio-container">
                  <p className="user-show-bio-header">
                    {user.username}&#39;s Bio
                  </p>
                  <p className="user-show-bio-text">{user.bio}</p>
                </div>
              </li>
            </ul>
          </div>
          <span className="divider" />
          <ul className="user-show-posts">{this.renderPosts()}</ul>
        </div>
      );
    } else {
      return <div className="nullUser" />;
    }
  }
}

export default withRouter(UserShow);
