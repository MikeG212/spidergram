import React from 'react';
import { connect } from 'react-redux';
import PostForm  from './post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';

class EditPostForm extends React.Component {
    
    render() {
        const {action, formType, post } = this.props;
        return (
            <PostForm
                action={action}
                formType={formType}
                post={post} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts[ownProps.match.params.postId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id)),
        updatePost: post => dispatch(updatePost(post))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);