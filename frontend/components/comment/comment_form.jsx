import React from "react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      user_id: this.props.currentUser.id,
      post_id: this.props.post.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = this.state;
    this.setState({ body: "" });
    this.props.createComment(comment);
  }

  render() {
    debugger;
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="comment-text-input"
          placeholder="Add a comment..."
          value={this.state.body}
          onChange={this.update("body")}
        />

        <input className="comment-submit" type="submit" value="Comment" />
      </form>
    );
  }
}

export default CommentForm;
