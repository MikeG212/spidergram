import React from 'react';
import { withRouter } from 'react-router-dom';

class PostForm extends React.Component{
   constructor(props) {
       super(props);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.state = this.props.post;
       this.handleFile = this.handleFile.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[caption]', this.state.caption);
        formData.append('post[photo]', this.state.photoFile);

        $.ajax({
            url: '/api/posts',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then(
            () => console.log("Great Success"),
            () => console.log("Nope")
        );

        // this.props.action(this.state);
    }

    render () {
        console.log(this.state);
        return (
            <div className="new-post-container">
                <div className="new-post-form">
                    <h3 className="new-post-title">{this.props.formType}</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="choose-file-holder">
                            <input type="file"
                                onChange={this.handleFile}
                                className="new-post-field choose-file-button"/>
                            <div className="choose-file-mask">Choose File
                            </div>
                        </div>

                        <img className="upload" src={this.state.imageUrl} />
                        <textarea
                            className="new-post-field caption-field"
                            value={this.state.caption}
                            onChange={this.update('caption')}
                            maxLength="300"
                            placeholder="Caption"/>
                        <div className="button-holder">
                            <input type="submit"
                                value="Post"
                                className="new-post-button create-post-button" />
                        </div>
                    </form>
                    <div className="button-holder">
                        <button className="new-post-button cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PostForm);

