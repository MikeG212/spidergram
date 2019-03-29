import React from 'react';
// Components
import CommentListItemContainer from './comment_list_item_container';
import CommentForm from './comment_form';

const CommentList = ({ comments, post_id, receiveComment }) => {
    const commentItems = comments.map(comment => (
        <CommentListItemContainer
            key={comment.id}
            comment={comment} />
    ));

    return (
        <div>
            <ul className="comment-list">
                {commentItems}
            </ul>
            <CommentForm post_id={post_id} receiveComment={receiveComment} />
        </div>
    )
};

export default CommentList;