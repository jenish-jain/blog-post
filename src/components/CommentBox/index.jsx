import React, { Component } from "react";
import Comment from "../Comment";
import "./style.css";

class CommentBox extends Component {
  state = {
    count: 0,
    comment: "",
    comments: []
  };

  updateValue = val => {
    // console.log(val);
    this.setState({ comment: val });
  };

  addNewComment = () => {
    const newComment = { caption: this.state.comment };
    let comments = [...this.state.comments, newComment];
    this.setState({ comments: comments });
    // console.log([...this.state.comments]);
    // console.log(comments);
  };

  render() {
    return (
      <div className="comment-box">
        <div className="comment-list">
          {this.state.comments.map(comment => (
            <Comment content={comment.caption} />
          ))}
        </div>
        <div className="new-comment">
          <input
            type="text"
            placeholder="type your comment here"
            onChange={e => this.updateValue(e.target.value)}
          ></input>
          <button onClick={this.addNewComment}>comment</button>
        </div>
      </div>
    );
  }
}

export default CommentBox;
