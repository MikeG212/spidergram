import React, { Component } from "react";
class Post extends Component {
    render() {
        return <article className="Post" ref="Post">
            const nickname = this.props.nickname;
            const avatar = this.props.avatar;
            const image = this.props.image;
            const caption = this.props.caption;
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img src="{avatar}" alt="{username}" />
                    </div>
                    <div className="Post-username">
                        <span>@{username}</span>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt="{caption}" src="{image}" />
                </div>
            </div>
            <div className="Post-caption">
                <strong>{username}</strong>{caption}
            </div>
        </article>;
    }
}
export default Post;