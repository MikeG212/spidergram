import React from "react";
import { Link } from "react-router-dom"
import CommentListContainer from '../comment_list/comment_list_container';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let username = this.props.post.user.username;
        let month = this.props.post.created_at.slice(5, 7);
        let date = this.props.post.created_at.slice(8, 10);
        let post_id = this.props.post.id;
        let image_url = this.props.post.image_url

        return(
            <div className="post-index-item">
                <div className="post-index-item-header">
                    <h5 className="username-link">
                        { username }
                    </h5>
                </div>
                <img className="post-image"
                    src={image_url} />
                <div className="post-index-item-footer">
                    <div className="caption-holder">
                        <div className="caption-username">@{ username } </div>
                        <div className="caption-text">{this.props.post.caption}</div>   
                    </div>
                    <div className="comment-holder">
                        <CommentListContainer post_id= { post_id } />
                    </div>
                    <div className="post-index-item-created-at">{month}-{date}</div>
                </div>
            </div>
        )
    }
}


export default PostIndexItem;