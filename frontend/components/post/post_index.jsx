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
      return (
        <PostIndexItem
          key={post.id}
          post={post}
          currentUser={this.props.currentUser}
          createLike={this.props.createLike}
          deleteLike={this.props.deleteLike}
          removeComment={this.props.removeComment}
        />
      );
    });

    return (
      <div className="post-index">
        <ul className="post-index-list">{posts.reverse()}</ul>
      </div>
    );
  }
}

export default withRouter(PostIndex);
