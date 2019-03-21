import React from "react";
import Link from "react-router-dom"

const PostIndexItem = ({ post, deletePost }) => { //1
    return (
        <li>
            <Link to={`/posts/${post.id}`}>
                {post.caption}
            </Link>
            <Link to={`/posts/${post.id}/edit`}>
                Edit
            </Link>
            <button onClick={() => deletePost(post.id)}>Delete</button> //5
        </li>);
};

export default PostIndexItem;