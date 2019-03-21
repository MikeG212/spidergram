import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts[ownProps.match.params.postId]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: id => dispatch(fetchPost(id))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(PostShow);