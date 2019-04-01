import React from "react";
import { withRouter } from "react-router-dom"
import CommentListItemContainer from "../comment/comment_list_container"

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick() {
        const postId = this.props.post.id;
        this.props.history.push(`/posts/${postId}`);
    }

    render() {
        let username = this.props.post.user.username;
        let month = this.props.post.created_at.slice(5, 7);
        let date = this.props.post.created_at.slice(8, 10);

        const commentList = (comment) => {
            return comments.map(comment => (
                <CommentListItemContainer
                    comment={comment}
                    key={comment.id}
                />
            ))
        }

        return (
            <div className="post-index-item" onClick={this.handleClick}>
                <div className="post-index-item-header">
                    <h5 className="username-link">
                        @{username}
                    </h5>
                </div>
                <img className="post-image"
                    src={this.props.post.image_url} />
                <div className="post-index-item-footer">
                    <div className="caption-holder">
                        <div className="caption-username">@{username} </div>
                        <div className="caption-text">{this.props.post.caption}</div>
                    </div>
                    <div className="post-index-item-created-at">{month}-{date}</div>
                    {commentList(comment)}
                </div>
            </div>
        )
    }
}

export default withRouter(PostIndexItem);