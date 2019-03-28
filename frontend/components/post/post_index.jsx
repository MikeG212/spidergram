import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

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
                <PostIndexItem
                    key={post.id}
                    post={post}
                    deletePost={this.props.deletePost} />
            );
        });

        return (
            <div className="post-index-items">
                <ul>
                    {posts}
                </ul>
            </div>
        );
    }
}

export default PostIndex;