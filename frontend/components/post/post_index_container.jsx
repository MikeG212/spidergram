import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, fetchPost, deletePost } from '../../actions/post_actions';
import { allPosts } from '../../reducers/selectors';

const mapStateToProps = state => {
    debugger
    return {
        posts: allPosts(state),
        state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchPost: id => dispatch(fetchPost(id)),
        deletePost: id => dispatch(deletePost(id)),
    }; 
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);