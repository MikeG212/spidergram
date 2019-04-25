
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PostShowContainer from '../post/post_show_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal.type) {
        case 'post':
            component = <PostShowContainer options={modal.options} closeModal={closeModal} />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);