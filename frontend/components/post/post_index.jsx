import React from 'react';
import { withRouter } from "react-router-dom"

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            post_id: 0
        }
        this.renderLikeText = this.renderLikeText.bind(this);
        this.renderHeart = this.renderHeart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderComments = this.renderComments.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
        this.renderRemoveButton = this.renderRemoveButton.bind(this);
        this.doubleTapLike = this.doubleTapLike.bind(this);
    }
    
    componentDidMount() {
        debugger
        this.props.fetchPosts();
    }




    handleSubmit(e) {
        e.preventDefault();
        debugger
        const comment = {
            body: this.state.body,
            user_id: this.props.currentUserId,
            username: this.props.currentUser.username,
            post_id: this.state.post_id
        };

        this.props.createComment(comment).then(this.setState({ body: "" }))

    }

    doubleTapLike(post) {
        if (!post.likers.includes(this.props.currentUserId)) {
            this.props.createLike({ post_id: post.id });
        }
    }

    update(property, postId) {
        debugger
        return e => this.setState({ [property]: e.target.value, post_id: postId });
    }

    renderPosts() {
        let posts = this.props.posts.map(post => {
            debugger
            if (!!post) {
                return (
                    <li key={`post-${post.id}`} className="post-container">
                        <ul className="info-and-image">
                            <li className="post-byline">
                                {/* profile pic */}
                                <a href={`#/users/${post.user_id}`}><p className="post-byline-username">{post.username}</p></a>
                            </li>
                            <li>
                                <img className="index-image"
                                    onDoubleClick={() => this.doubleTapLike(post)}
                                    src={post.image_url}
                                />
                            </li>
                            <div className="post-time">{post.createdAt}</div>
                        </ul>

                        <div className="post-footer">
                            <div className="post-caption-comment-holder">
                                {this.renderLikeText(post.likers.length)}
                                <span className="post-caption-username">{post.username} </span>
                                <span className="post-caption-text">{post.caption}</span>
                            </div>
                            <ul className="post-comments-container">{this.renderComments(post)}</ul>
                        </div>
                        <div className="like-comment-form-render">
                            {this.renderHeart(post)}
                            <form className="comment-form" onSubmit={this.handleSubmit}>
                                <input type="text"
                                    className="comment-text-input"
                                    placeholder="Add a comment..."
                                    value={this.state.body}
                                    onChange={this.update("body", post.id)} />

                                <input className="comment-submit" type="submit" value="Comment" />
                            </form>
                        </div>
                    </li>
                );
            }
        });
        return posts.reverse();

    }


    renderComments(post) {
        let comments = [];

        if (post.comments) {
            comments = Object.values(post.comments);
        }

        return (
            comments.map(comment => {
                let username = comment.username || currentUser.username;
                debugger
                return (
                    <li key={`comments-${comment.id}`} className="comment-and-username">
                        <label>
                            <a className="comment-username-link" href={`#/users/${comment.user_id}`}>
                                {username}
                            </a>
                            <span className="comment-body">{comment.body}</span>
                            {this.renderRemoveButton(comment)}
                        </label>
                    </li>
                )
            })
        )
    }

    renderRemoveButton(comment) {
        if (comment.user_id === this.props.currentUserId) {
            return (
                <span className="core-sprite comment-icons remove-icon hide-text" onClick={() => this.props.removeComment(comment.id)}>Delete Comment</span>
            );
        }
    }

    renderHeart(post) {
        debugger
        if (post.likers.includes(this.props.currentUserId)) {
            return (
                <div className="core-sprite comment-icons red-heart"
                onClick={()=>this.props.deleteLike(post.id)}></div>
            )
        } else {
            return (
                <div className="core-sprite comment-icons empty-heart"
                onClick={()=>this.props.createLike({post_id: post.id})}></div>
            )
        }
    }

    renderLikeText(numLikes) {
        debugger
        if (numLikes !== 1) {
            return <p className="post-like-count">{numLikes} likes</p>;
        } else {
            return <p className="post-like-count">1 like</p>;
        }
    }




    render() {
        debugger
        return (
            <div className="index">
                <ul className="post-index-container">
                    {this.renderPosts()}
                </ul>
            </div>

        );
    }
}

export default withRouter(PostIndex);