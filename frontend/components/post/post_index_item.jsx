import React from "react";
import { withRouter } from "react-router-dom"

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            post_id: 0
        }
        this.renderLikeText = this.renderLikeText.bind(this);
        this.renderHeart = this.renderHeart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderComments = this.renderComments.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = {
            body: this.state.body,
            user_id: this.props.currentUserId,
            username: this.props.currentUser.username,
            post_id: this.props.post.id
        };

        this.props.createComment(comment).then(this.setState({ body: "" }))

    }

    renderComments(post) {
        let comments = [];

        if (post.comments) {
            comments = Object.values(post.comments);
        }

        return (
            comments.map(comment => {
                debugger
                return (
                    <li key={`comments-${comment.id}`} className="comment-item">
                        <label>
                            <a className="comment-username-link" href={`#/users/${comment.userId}`}>
                                {comment.username}
                            </a>
                            <div className="comment-body">{comment.body}</div>
                        </label>
                        {/* {this.renderRemoveIcon(comment)} */}
                    </li>
                )
            })
        )
    }

    renderHeart(post) {
        debugger
        if (post.likers.includes(this.props.currentUserId)) {
            return (
                <div className="core-sprite heart red-heart"></div>
            )
        } else {
            return (
                <div className="core-sprite heart empty-heart"></div>
            )
        }
    }

    renderLikeText(numLikes) {
        if (numLikes !== 1 ){
            return `${numLikes} likes`;
        } else {
            return '1 like';
        }
    }

    render() {
        debugger
        const username = this.props.post.username;
        const createdAt = this.props.post.created_at;
        const post = this.props.post;

        return (
            <div className="index-item">
                <div className="index-item-header">
                    <h5 className="username-link">
                        @{username}
                    </h5>
                    <div className="post-time">{createdAt}</div>
                </div>
                <div className="photo-container">
                    <img className="index-image"
                        onDoubleClick={this.doubleTapLike}
                        src={this.props.post.image_url} />
                </div>
                <div className="index-item-footer">
                    <div className="caption-comment-holder">
                        <div className="like-count">{this.renderLikeText(post.likers.length)}</div>
                        <span className="caption-username">@{username} </span>
                        <span className="caption-text">{post.caption}</span>
                    </div>
                    <ul className="comments-render">{this.renderComments(post)}</ul>
                </div>    
                <div className="like-comment-form-render">
                    {this.renderHeart(post)}         
                    <form className="comment-form" onSubmit={this.handleSubmit}>
                        <input type="text"
                            className="comment-text-input"
                            placeholder="Add a comment..."
                            value={this.state.body}
                            onChange={this.update("body")} />

                        <input className="comment-submit" type="submit" value="Comment" />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(PostIndexItem);