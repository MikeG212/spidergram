import { connect } from 'react-redux';
import CommentListItem from './comment_list_item';
// Actions
import { receiveComment, removeComment } from '../../actions/comment_actions';

const mapDispatchToProps = (dispatch, { comment }) => ({
    removeComment: () => dispatch(removeComment(comment)),
    receiveComment: comment => dispatch(receiveComment(comment))
});

export default connect(
    null, // comment prop is already passed in
    mapDispatchToProps
)(CommentListItem);