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
  }

  doubleTapLike(post) {
    if (!post.likers.includes(this.props.currentUser.id)) {
      this.props.createLike({ post_id: post.id });
    }
  }

  renderComments(post) {
    let comments = [];
    if (post.comments) {
      comments = Object.values(post.comments);
    }

    return comments.map(comment => {
      let username = comment.username || this.props.currentUser.username;

      return (
        <li key={`comments-${comment.id}`} className="comment-and-username">
          <label>
            <a
              className="comment-username-link"
              href={`#/users/${comment.user_id}`}
            >
              {username}
            </a>
            <span className="comment-body">{comment.body}</span>
            {this.renderRemoveCommentButton(comment)}
          </label>
        </li>
      );
    });
  }

  likeStatus() {
    debugger;
    return this.props.post.likers.includes(this.props.currentUser.id);
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
    debugger;
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
    debugger;
    return this.likeStatus() ? "red-heart" : "empty-heart";
  }

  renderHeart() {
    debugger;
    let className = `core-sprite comment-icons ${this.heartClassname()}`;
    return <div className={className} onClick={() => this.likeAction()} />;
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
    debugger;
    const { post, key } = this.props;
    const { username, created_at, caption } = post;
    return (
      <li key={key} className="index-item">
        <div className="index-item-header">
          <h5 className="username-link">@{username}</h5>
          <div className="post-time">{created_at}</div>
        </div>
        <div className="photo-container">
          <img
            className="index-image"
            onDoubleClick={this.doubleTapLike}
            src={post.image_url}
          />
        </div>
        <div className="index-item-footer">
          <div className="caption-comment-holder">
            <div className="like-count">{this.renderLikeText()}</div>
            <span className="caption-username">@{username} </span>
            <span className="caption-text">{caption}</span>
          </div>
          <ul className="comments-render">{this.renderComments(post)}</ul>
          {this.renderHeart()}
          <CommentFormContainer post={post} />
        </div>
        <div className="like-render">
          <div className="material-icons" />
        </div>
      </li>
    );
  }
}

export default withRouter(PostIndexItem);
