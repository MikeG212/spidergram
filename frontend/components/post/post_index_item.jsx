import React from "react";
import CommentFormContainer from "../comment/comment_form_container";
import { withRouter } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderLikeText = this.renderLikeText.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.renderRemoveCommentButton = this.renderRemoveCommentButton.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.doubleTapLike = this.doubleTapLike.bind(this);
    this.likeStatus = this.likeStatus.bind(this);
    this.likeAction = this.likeAction.bind(this);
    this.navigateUserShow = this.navigateUserShow.bind(this);
    this.navigatePostShow = this.navigatePostShow.bind(this);
  }

  likeStatus() {
    return this.props.post.likers.includes(this.props.currentUser.id);
  }

  navigateUserShow(id) {
    this.props.history.push(`/users/${id}`);
  }

  navigatePostShow() {
    debugger;
    this.props.history.push(`/posts/${this.props.post.id}`);
  }

  doubleTapLike(post) {
    if (!this.likeStatus()) {
      const like = {
        post_id: this.props.post.id
      };
      this.props.createLike(like);
    }
  }

  renderComments() {
    let comments = [];
    if (this.props.post.comments) {
      comments = Object.values(this.props.post.comments);
    }

    return comments.map(comment => {
      let username = comment.username || this.props.currentUser.username;
      return (
        <div key={`comments-${comment.id}`} className="comment-item">
          <div
            className="caption-username comment-username"
            onClick={() => this.navigateUserShow(comment.user_id)}
          >
            {username}
          </div>
          <span className="caption-text comment-text">{comment.body}</span>
          {this.renderRemoveCommentButton(comment)}
        </div>
      );
    });
  }

  renderRemoveCommentButton(comment) {
    if (comment.user_id === this.props.currentUser.id) {
      return (
        <span
          className="core-sprite comment-icons remove-icon hide-text"
          onClick={() => this.props.removeComment(comment.id)}
        >
          Delete Comment
        </span>
      );
    }
  }

  likeAction() {
    const like = {
      post_id: this.props.post.id
    };
    if (this.likeStatus()) {
      this.props.deleteLike(like);
    } else {
      this.props.createLike(like);
    }
  }

  heartClassname() {
    return this.likeStatus() ? "red-heart" : "empty-heart";
  }

  renderHeart() {
    let className = `core-sprite comment-icons ${this.heartClassname()}`;
    return <span className={className} onClick={() => this.likeAction()} />;
  }

  renderLikeText() {
    let numLikes = this.props.post.likers.length;
    if (numLikes !== 1) {
      return <p className="post-like-count">{numLikes} likes</p>;
    } else {
      return <p className="post-like-count">1 like</p>;
    }
  }

  render() {
    const { post, key } = this.props;
    const { username, user_id, created_at, caption } = post;
    return (
      <li key={key} className="index-item">
        <div className="index-item-header">
          <h5
            className="post-username-link"
            onClick={() => this.navigateUserShow(user_id)}
          >
            {username}
          </h5>
          <div className="post-time">{created_at}</div>
        </div>
        <div className="photo-container">
          <img
            className="post-image"
            onDoubleClick={this.doubleTapLike}
            onClick={() => this.navigatePostShow()}
            src={post.image_url}
          />
        </div>
        <div className="index-item-footer">
          <div className="caption-comment-holder">
            <div className="caption-holder">
              <div className="like-count">{this.renderLikeText()}</div>
              <span
                className="caption-username"
                onClick={() => this.navigateUserShow(user_id)}
              >
                {username}
              </span>
              <span className="caption-text">{caption}</span>
            </div>
            <div className="comments-render">{this.renderComments()}</div>
          </div>

          <div className="like-comment-form">
            {this.renderHeart()}
            <CommentFormContainer post={post} />
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(PostIndexItem);
