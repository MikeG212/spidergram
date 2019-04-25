import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.user.id,
            username: this.props.user.username,
            bio: this.props.user.bio,
            photoFile: null,
            photoUrl: this.props.user.avatar_url,
            uploadErrors: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    };

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            const fileExtension = file.name.split('.').pop();
            const extensions = ['jpg', 'png', 'JPG', 'PNG'];

            if (extensions.includes(fileExtension)) {
                this.setState({ photoFile: file, photoUrl: fileReader.result });
            } else {
                this.setState({ uploadErrors: ['Please select a jpg or png file'] })
            }
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.state.bio.length > 150) {
            this.setState({ uploadErrors: ['Bio cannot be longer than 150 characters'] })
        } else {
            const formData = new FormData();
            formData.append('user[bio]', this.state.bio);
            formData.append('user[username]', this.state.username);
            formData.append('user[id]', this.state.id);

            if (this.state.photoFile) {
                formData.append('user[avatar]', this.state.photoFile);
            }

            this.props.updateUser(formData)
                .then(() => this.props.history.push(`/users/${this.state.id}`))
        }
    }

    renderErrors() {
        return (
            <ul className="upload-profile-photo-list">
                <li className="upload-profile-photo-errors">
                    {this.state.uploadErrors}
                </li>
            </ul>
        );
    }


    render() {
        return (
            <div className="edit-profile">
                <div className="edit-container">
                    <form className="edit-form" onSubmit={this.handleSubmit}>
                        <input
                            id="new-profile-selector"
                            type="file"
                            onChange={this.handleFile}
                        />
                        <label
                            htmlFor="new-profile-selector"
                            className="new-profile-selector-label"
                        >
                            <img
                                id='edit-image-preview'
                                src={this.state.photoUrl}
                            />
                        </label>
                        <div className="edit-input-boxes">
                            <label className="username-label">
                                <p className="edit-label">Username</p>
                                <input
                                    type="text"
                                    className="edit-username-input"
                                    value={this.state.username}
                                    onChange={this.update("username")}
                                    disabled
                                />
                            </label>
                            <label className="bio-label">
                                <p className="edit-label">Bio</p>
                                <textarea
                                    className="bio-input"
                                    value={this.state.bio}
                                    onChange={this.update("bio")}
                                ></textarea>
                            </label>
                            <input type="submit" className="edit-button" value="Submit" />
                        </div>
                        {this.renderErrors()}
                    </form>
                </div>
            </div>
        )
    }

}

export default UserForm;