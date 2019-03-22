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
                <img className="postImage" src={this.props.post.image_url} alt={this.props.post.caption}/>
                <Link to="/">Back to Index</Link>
            </div>
        );
    };
}

export default PostShow;