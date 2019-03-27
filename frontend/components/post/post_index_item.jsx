import React from "react";
import { Link } from "react-router-dom"

const PostIndexItem = ({ post, deletePost }) => {
    return (
        <li className="post-index-item">
            <Link to={`/posts/${post.id}`}>
                {post.caption}
            </Link>
            <br />
            <img src={post.image_url} className="post-image" alt={post.caption}></img>
            <br />
            <Link to={`/posts/${post.id}/edit`}>
                Edit
            </Link>
            <button onClick={() => deletePost(post.id)}>Delete</button>
        </li>);
};

export default PostIndexItem;