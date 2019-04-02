import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/post_actions';

const mapStateToProps = ({ session, entities: { users } }, postId) => {
    debugger
    return {
        currentUser: users[session.id],
        postId
    };
};

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);