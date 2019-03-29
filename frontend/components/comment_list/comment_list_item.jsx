import React from 'react';

class CommentListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="comment-header">
                <div className="comment-body">
                    <p>{this.props.comment.body}</p>
                </div>
            </li>
        );
    }
}


export default CommentListItem;