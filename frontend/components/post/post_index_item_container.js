import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';

const mapStateToProps = (state, ownProps) => {
    return {
        posts:  Object.values(state.posts),
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndexItem);