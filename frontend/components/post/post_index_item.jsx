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
        const username = this.props.post.author.username;
        const month = this.props.post.created_at.slice(5, 7);
        const date = this.props.post.created_at.slice(8, 10);
        const postId = this.props.post.id;
        const commentIds = this.props.post.commentIds;
        const comments = this.props.post.comments;




        return (
            <div className="post-index-item">
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
                    <div className="comments-holder">{commentIds}</div>
                    <CommentFormContainer postId={postId}/>
                </div>
            </div>
        )
    }
}

export default withRouter(PostIndexItem);