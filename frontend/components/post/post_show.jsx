import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }

    render() {
        return (
            <div>
                <h3>{this.props.post.caption}</h3>
                <p>{this.props.post.image_url}</p>
                <Link to="/">Back to Index</Link>
            </div>
        );
    };
}

export default PostShow;