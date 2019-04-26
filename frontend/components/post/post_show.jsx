import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router";
import CommentFormContainer from "../comment/comment_form_container";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.renderLikeText = this.renderLikeText.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.renderRemoveCommentButton = this.renderRemoveCommentButton.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.likeStatus = this.likeStatus.bind(this);
    this.likeAction = this.likeAction.bind(this);
    this.navigateUserShow = this.navigateUserShow.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  likeStatus() {
    return this.props.post.likers.includes(this.props.currentUser.id);
  }

  navigateUserShow(id) {
    this.props.closeModal();
    this.props.history.push(`/users/${id}`);
  }

  renderComments() {
    let comments = [];
    if (this.props.post.comments) {
      comments = Object.values(this.props.post.comments);
    }

    return comments.map(comment => {
      let username = comment.username || this.props.currentUser.username;
      return (
        <li key={`comments-${comment.id}`} className="comment-item">
          <div
            className="caption-username comment-username"
            onClick={() => this.navigateUserShow(comment.user_id)}
          >
            {username}
          </div>
          <span className="caption-text comment-text">{comment.body}</span>
          {this.renderRemoveCommentButton(comment)}
        </li>
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
    if (this.props.post) {
      const { post } = this.props;
      const { username, user_id, created_at, caption, image_url } = post;
      return (
        <div className="modal-content">
          <img className="modal-image" src={image_url} />
          <div className="modal-right">
            <div className="modal-upper">
              <div className="modal-header">
                <span className="modal-username"
                  onClick={() => this.navigateUserShow(user_id)}>{username}</span>
              </div>
              <div className="like-count-modal">
                <span>
                  {this.renderLikeText()}
                </span>
                <span className="modal-time">
                  {post.created_at}
                </span>
              </div>
              <div className="caption-text-modal">
                <span className="caption-username"
                  onClick={() => this.navigateUserShow(user_id)}>
                  {username}
                </span>
                <span className="caption-text-modal"> {caption}</span>
              </div>
              <div className="modal-comment-list">
                <ul className="comments-render">
                  {this.renderComments()}
                </ul>
              </div>
            </div>
            <div className="modal-like-comment-form">
              {this.renderHeart()}
              <CommentFormContainer postId={post.id} />
            </div>
          </div>
        </div>
      );
    } return <div className="nullPost"></div>
  }
}

export default withRouter(PostShow);
