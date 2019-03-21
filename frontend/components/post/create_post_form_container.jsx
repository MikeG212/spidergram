import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form'
import { createPost } from '../../actions/post_actions'

const mapStateToProps = () => {
    return {
        post: { caption: '', image: '', user_id: ''}
    };
};

const mapDispatchToProps =  dispatch => {
    return {
        action: post => dispatch(createPost(post))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)