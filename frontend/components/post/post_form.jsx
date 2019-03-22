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
        debugger
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
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
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="caption">
                     <input
                            type="text"
                            value={this.state.caption}
                            onChange={this.update('caption')} />
                    </label>
                    <input type="file" onChange={this.handleFile}/>

                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }
}

export default withRouter(PostForm);

