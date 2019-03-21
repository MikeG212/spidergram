import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';

const mapStateToProps = (satate, ownProps) => {
    return {
        post: StaticRange.posts[ownProps.match.params.postId]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: id => dispatch(fetchPost(id))
    };
};