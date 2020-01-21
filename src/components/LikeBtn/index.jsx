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
    const { LikeCount } = this.state;
    return (
      <div className="btn-box">
        <button className="like-btn" onClick={this.LikeCounter}>
          <AiOutlineLike />
          Like
        </button>
        {LikeCount > 0 ? (
          <span>
            {LikeCount} {LikeCount > 1 ? "Likes" : "Like"}
          </span>
        ) : null}
      </div>
    );
  }
}

export default LikeBtn;
