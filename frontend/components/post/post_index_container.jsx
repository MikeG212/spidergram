import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { allPosts } from '../../reducers/selectors';

const mapStateToProps = state => {
    return {
        posts:  allPosts(state),
        state
    };
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