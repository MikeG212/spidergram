import React from 'react';

class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <CreatePostFormContainer />
                <ul>
                    {this.props.posts.map(post => {
                        return <PostIndexItem post={post} deletePost={this.props.deletePost}/>;
                    })}
                </ul>
            </div>
        );
    }
}

// <PostIndexItem post={post} key={post.id} />
export default PostIndex;