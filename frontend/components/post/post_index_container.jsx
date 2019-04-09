import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';

const mapStateToProps = (state) => {
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
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: (id) => dispatch(deletePost(id)),
    }; 
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);