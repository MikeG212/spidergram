import React from 'react';
import { withRouter } from 'react-router';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
const hashHistory = require('react-router').hashHistory;

class PostForm extends React.component{
    constructor(props){
        super(props);
        this.state = {
            caption: "",
            photoFile: null,
            photoUrl: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCaption = this.handleCaption.bind(this);
        this.handleFile = this.handleFile.bind(this);

    }

    handleCaption(e) {
        this.setState({ title: e.currentTarget.caption });
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
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
            processType: false
        }).then(
            (response) => console.log("Great success"),
            (response) => console.log("FAIL")
        );

    }

    render() {
        console.log(this.state);
        const preview = this.state.photoURL ? <img src={this.state.photoUrl} /> : null;
        return (
            <div className="new-post-container">
                <div className="new-post-form">
                    <h3 className="new-post-title">Upload</h3>

                    <form onSubmit={this.handleSubmit}>
                        <div className="choose-file-holder">
                            <input type="file"
                             onChange={this.handleCaption}
                             className="post-file-button"/>
                             <div className="choose-file-mask">Choose File  
                             </div>
                        </div>
                         
                        <h3>Preview</h3>
                        <img className="preview" src={this.state.photoUrl} />

                    </form>
                </div>
            </div>
        )
    }



<input type="file" onChange={this.handleField.bind(this)} />
}

