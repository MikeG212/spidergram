import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        posts:  Object.values(state.posts),
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = (dispatch) => ({
    //import and add fetch comments here THX
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndexItem);