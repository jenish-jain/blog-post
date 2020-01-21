import React, { Component } from "react";
import BlogPost from "../BlogPost";
import "./style.css";
class Feeds extends Component {
  state = {
    feeds: [
      {
        index: "1",
        title: "William W. Purkey",
        caption:
          "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
        imgUrl: "https://picsum.photos/seed/picsum/500/300?grayscale"
      },
      {
        index: "2",
        title: "Albert Einstein",
        caption:
          "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        imgUrl: "https://picsum.photos/seed/two/500/300?grayscale"
      },
      {
        index: "3",
        title: "Maya Angelou",
        caption:
          "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        imgUrl: "https://picsum.photos/seed/zebraś/500/300?grayscale"
      },
      {
        index: "4",
        title: "H. Jackson Brown Jr.",
        caption:
          "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        imgUrl: "https://picsum.photos/seed/zebraś/500/300?grayscale"
      }
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
