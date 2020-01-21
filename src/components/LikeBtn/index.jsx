import React, { Component } from "react";
import "./style.css";
import { AiOutlineLike } from "react-icons/ai";

class LikeBtn extends Component {
  state = { LikeCount: 0 };

  LikeCounter = () => {
    console.log("liked");
    let { LikeCount: likes } = this.state;
    likes = likes + 1;
    this.setState({ LikeCount: likes });
  };

  render() {
    return (
      <div>
        <button className="like-btn" onClick={this.LikeCounter}>
          <AiOutlineLike />
          Like
        </button>
        {this.state.LikeCount > 0 ? (
          <span>{this.state.LikeCount} Likes</span>
        ) : null}
      </div>
    );
  }
}

export default LikeBtn;
