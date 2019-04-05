import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const posts = this.props.posts.map(post => {
            return (

                <PostIndexItem post={post}
                    key={post.id}
                    currentUser={this.props.currentUser}
                />
            );
        });

        return (
            <div className="index">
                <ul className="index-images">
                    {posts}
                </ul>
            </div>

        );
    }
}

export default PostIndex;