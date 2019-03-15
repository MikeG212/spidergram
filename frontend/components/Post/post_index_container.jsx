import { connect } from 'react-redux';
import PostIndex from './post_index';
import { requestPosts } from '../../actions/post_actions';

const asArray = (obj) => Object.keys(obj).map(key => obj[key]);

const mapStateToProps = ({ posts }) => {
    return ({
        posts: asArray(posts)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestPosts: () => dispatch(requestPosts())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);