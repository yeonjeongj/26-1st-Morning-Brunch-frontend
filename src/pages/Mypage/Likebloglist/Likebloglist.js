import React, { Component } from 'react';
import './Likebloglist.scss';

class Likebloglist extends Component {
  render() {
    const { title, subtitle, articlecontent, img, username } = this.props;
    return (
      <div className="blogList">
        <div className="post">
          <strong className="title">{title}</strong>
          <div className="wrapContent">
            <span className="subTitle">{subtitle}</span>
            <span className="icoBar">|</span>
            <span className="articleContent">{articlecontent}</span>
          </div>
          <div className="writer">
            <i>by</i>&nbsp;&nbsp;{username}
          </div>
        </div>
        <img className="coverImg" src={img} alt="coverimg" />
      </div>
    );
  }
}

export default Likebloglist;
