import { connect } from 'react-redux';
import PostForm from './post_form'
import { createPost } from '../../actions/post_actions'

const mapStateToProps = () => {
    const post = { caption: '', image_url: '' }
    const formType = 'Upload';

    return { post, formType };
};

const mapDispatchToProps =  dispatch => {
    return {
        action: post => dispatch(createPost(post)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);