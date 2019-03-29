import { connect } from 'react-redux';
import CommentList from './comment_list';
// Actions
import { commentsByPostId } from '../../reducers/selectors';
import { receiveComment } from '../../actions/comment_actions';

const mapStateToProps = (state, { post_id }) => ({
    comments: commentsByPostId(state, post_id),
    post_id
});

const mapDispatchToProps = dispatch => ({
    receiveComment: comment => dispatch(receiveComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);