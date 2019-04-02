import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div className="loading">Loading...</div>;
        }

        let month = post.created_at.slice(5, 7);
        let date = post.created_at.slice(8, 10);

        return (
            <div className="single-post-header">
                <h3>{post.user.username}</h3>
                <p>{post.caption}</p>
                <img className="post-image"
                    src={post.image_url} />
                <div className="post-index-item-footer">
                    <div className="caption-holder">
                        <div className="caption-username">@{post.user.username} </div>
                        <div className="caption-text">{post.caption}</div>
                    </div>
                    <div className="post-index-item-created-at">{month}-{date}</div>
                    <CommentForm postId={post.id} />
                </div>
                <Link to="/">Back to Index</Link>
            </div>
        );
    };
}

export default PostShow;