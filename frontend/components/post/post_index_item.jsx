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
    this.renderLikeText = this.renderLikeText.bind(this);
  }

  doubleTapLike(post) {
    if (!post.likers.includes(this.props.currentUserId)) {
      this.props.createLike({ post_id: post.id });
    }
  }

  renderComments(post) {
    debugger;
    let comments = [];
    if (post.comments) {
      comments = Object.values(post.comments);
    }

    return comments.map(comment => {
      let username = comment.username || currentUser.username;
      debugger;
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

  renderRemoveCommentButton(comment) {
    if (comment.user_id === this.props.currentUserId) {
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

  renderHeart(post) {
    debugger;
    if (post.likers.includes(this.props.currentUserId)) {
      return (
        <div
          className="core-sprite comment-icons red-heart"
          onClick={() => this.props.deleteLike(post.id)}
        />
      );
    } else {
      return (
        <div
          className="core-sprite comment-icons empty-heart"
          onClick={() => this.props.createLike({ post_id: post.id })}
        />
      );
    }
  }

  renderLikeText(numLikes) {
    if (numLikes !== 1) {
      return <p className="post-like-count">{numLikes} likes</p>;
    } else {
      return <p className="post-like-count">1 like</p>;
    }
  }

  render() {
    const { post } = this.props;
    const { username, created_at, caption } = post;
    return (
      <div className="index-item">
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
            <div className="like-count">
              {this.renderLikeText(post.likers.length)}
            </div>
            <span className="caption-username">@{username} </span>
            <span className="caption-text">{caption}</span>
          </div>
          <ul className="comments-render">{this.renderComments(post)}</ul>
          <CommentFormContainer post={post} />
        </div>
        <div className="like-render">
          <div className="material-icons" />
        </div>
      </div>
    );
  }
}

export default withRouter(PostIndexItem);
