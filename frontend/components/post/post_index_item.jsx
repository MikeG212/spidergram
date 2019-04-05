import React from "react";
import { withRouter } from "react-router-dom"
import CommentFormContainer from "../comment/comment_form_container"


class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);        
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     const postId = this.props.post.id;
    //     this.props.history.push(`/posts/${postId}`);
    // }

    render() {
        const username = this.props.post.user.username;
        const month = this.props.post.created_at.slice(5, 7);
        const date = this.props.post.created_at.slice(8, 10);
        const postId = this.props.post.id;
        const comments = this.props.post.comments || [];
        debugger
        const authors = this.props.post.authors;
        const commentIds = Object.keys(comments);
        console.log(comments)
        console.log(commentIds)

        debugger
        const commentList = commentIds.map(commentId => {
            let comment = comments[commentId];
            debugger
            let authorName = authors[comment.user_id].username;

            debugger
            return (
                    <li className="comment-item" key={commentId}>
                        <div className="comment-author">by {authorName}</div>
                        <div className="comment-body">{comment.body}</div>
                    </li>
                );
        })

        return (
            <div className="post-index-item">
                <div className="post-index-item-header">
                    <h5 className="username-link">
                        @{username}
                    </h5>
                    <div className="post-time">{month}-{date}</div>
                </div>
                <div className="photo-container">
                    <img className="post-image"
                        // onDoubleClick={this.doubleTapLike}
                        src={this.props.post.image_url} />
                </div>
                <div className="post-index-item-footer">
                    <div className="caption-comment-holder">
                        <div className="like-count">like</div>
                        <span className="caption-username">@{username} </span>
                        <span className="caption-text">{this.props.post.caption}</span>
                    </div>
                    <ul className="comments-render">{commentList}</ul>
                </div>    
                <div className="like-comment-render">
                    <div className="material-icons"></div>             
                    <CommentFormContainer postId={postId}/>
                </div>
            </div>
        )
    }
}

export default withRouter(PostIndexItem);