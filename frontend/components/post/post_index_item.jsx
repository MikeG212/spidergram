import React from "react";
import { withRouter } from "react-router-dom"
import CommentFormContainer from "../comment/comment_form_container"


class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);        
    }

    render() {
        const username = this.props.post.username;
        const createdAt = this.props.post.created_at;
        const post = this.props.post;
        let comments = [];

        if (post.comments) {
            comments = Object.values(post.comments);
        }



        const commentList = comments.map(comment => {
            return (
                    <li className="comment-item" key={comment.id}>
                        <div className="comment-author">by {comment.username}</div>
                        <div className="comment-body">{comment.body}</div>
                    </li>
                );
        })

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
                        <div className="like-count">like</div>
                        <span className="caption-username">@{username} </span>
                        <span className="caption-text">{post.caption}</span>
                    </div>
                    <ul className="comments-render">{commentList}</ul>
                </div>    
                <div className="like-render">
                    <div className="material-icons"></div>             
                    <CommentFormContainer postId={post.id}/>
                </div>
            </div>
        )
    }
}

export default withRouter(PostIndexItem);