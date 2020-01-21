import React, { Component } from "react";
import BlogPost from "../BlogPost";

class Feeds extends Component {
  state = {
    feeds: [
      { index: "1", title: "heading 1", caption: "first-blog" },
      { index: "2", title: "heading 1", caption: "second-blog" },
      { index: "3", title: "heading 1", caption: "third-blog" }
    ]
  };
  render() {
    return (
      <div className="feeds">
        {this.state.feeds.map(feed => (
          <BlogPost feed={feed} />
        ))}
      </div>
    );
  }
}

export default Feeds;
