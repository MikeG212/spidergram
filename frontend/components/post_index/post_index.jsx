import React from 'react';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);

        this.images = this.images.bind(this);
    }

    componentDidMount() {
        this.props.requestPosts();
    }

    images() {
        return this.props.posts.map(post => (
            <img src={post.image_url} key={post.id} height="500" width="500" />
        ));
    }

    render() {
        return (
            <div>
                {this.images()}
            </div>
        );
    }
}

// <PostIndexItem post={post} key={post.id} />
export default PostIndex;