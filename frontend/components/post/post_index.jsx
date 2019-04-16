import React from "react";
import { withRouter } from "react-router-dom";
import PostIndexItem from "./post_index_item";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map(post => {
      return <PostIndexItem post={post} key={post.id} />;
    });

    return (
      <div className="post-index">
        <ul className="post-index-list">{posts.reverse()}</ul>
      </div>
    );
  }
}

export default withRouter(PostIndex);
