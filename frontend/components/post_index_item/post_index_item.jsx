import React, { Component } from "react";
import Link from "react-router-dom"

class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const username = this.props.username;
        const image = this.props.image;
        const caption = this.props.caption;
        const post = this.props.post;
        const deletePost = this.props;

        <article className="Post" ref="Post">
            <img src={avatar} alt={username} />
            <span>{nickname}</span>
            <img alt={caption} src={image} />
            <strong>@{nickname}</strong>{caption}
        </article>

        return (
            <div>
                <Link to={`/posts/${props.post.id}`}>Link</Link>
                <Link to={`/posts/${props.post.id}/edit`}>Edit</Link>
                <button onClick={() => props.deletePost(props.post.id)}>Delete me</button>

            </div>  
        );
    }
}
export default Post;