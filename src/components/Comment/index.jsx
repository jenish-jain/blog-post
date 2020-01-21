import React, { Component } from "react";
import LikeBtn from "../LikeBtn";
import "./style.css";

class Comment extends Component {
  state = {};
  render() {
    return (
      <div className="comment">
        <div className="comment-body">{this.props.content}</div>
        <LikeBtn />
      </div>
    );
  }
}

export default Comment;
