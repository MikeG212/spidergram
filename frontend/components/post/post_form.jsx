import React from 'react';

class PostForm extends React.component{
   constructor(props) {
       super(props);
       this.state = {
           caption: '',
           image_url: '',
       };

       this.updateImage = this.updateImage.bind(this);
       this.updateCaption = this.updateCaption.bind(this);
   }

   updateImage(e) {
       this.setState({ image_url: e.currentTarget.value })
   }

   updateCaption(e) {
       this.setState({ caption: e.currentTarget.value })
   }
    render () {
        return (
            <div>
                <form onSubmit={() => this.props.action(this.state)}>
                    <input onChange={this.props} type="submit" value="submit"/>
                    <img src={image_url} alt={caption}/>
                </form>
            </div>
        );
    }
}

export default PostForm;

