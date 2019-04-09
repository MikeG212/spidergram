import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { createComment } from '../../actions/post_actions';

const mapStateToProps = (state) => {
    debugger
    let posts = [];
    if (state.entities.posts) {
        posts = Object.values(state.entities.posts);
    }

    return ({
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        posts: posts
    });
};

const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: (id) => dispatch(deletePost(id)),
        createComment: comment => dispatch(createComment(comment)),
    }; 
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);