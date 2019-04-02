import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/post_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
    };
};

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);