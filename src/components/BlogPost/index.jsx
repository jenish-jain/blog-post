import React, { Component } from "react";
import LikeBtn from "../LikeBtn";
import CommentBox from "../CommentBox";

class BlogPost extends Component {
  state = {};
  render() {
    const { title, caption } = this.props.feed;
    return (
      <div className="blogpost">
        <div className="blog-title">{title}</div>
        <div className="blog-body">{caption}</div>
        <LikeBtn />
        <CommentBox />
      </div>
    );
  }
}

export default BlogPost;
