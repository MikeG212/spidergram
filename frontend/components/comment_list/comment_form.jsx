import { uniqueId } from '../../util/id_generator'
import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            post_id: this.props.post_id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveComment(comment);
        this.setState({
            body: ""
        }); // reset form
    }

    render() {
        return (
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <input
                    className="input"
                    ref="body"
                    value={this.state.body}
                    placeholder="Tell us how you really feel..."
                    onChange={this.update('body')}
                    required />
                <button className="create-button">Post!</button>
            </form>
        );
    }
}

export default CommentForm;