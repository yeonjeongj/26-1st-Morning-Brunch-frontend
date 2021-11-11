import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Recentbloglist.scss';

class Recentbloglist extends Component {
  goToArticle = value => {
    const { history } = this.props;
    history.push(`/article/${value}`);
  };
  render() {
    const { recentBlogList } = this.props;

    return (
      <>
        {recentBlogList.map((recent, idx) => {
          return (
            <div
              key={idx}
              className="blogList"
              onClick={() => {
                this.goToArticle(`${recent.id}`);
              }}
            >
              <div className="post">
                <strong className="title">{recent.title}</strong>
                <div className="wrapContent">
                  <span className="subTitle">{recent.subTitle}</span>
                  <span className="icoBar">|</span>
                  <span className="articleContent">
                    {recent.articleContent}
                  </span>
                </div>
                <div className="writer">
                  <i>by</i>&nbsp;&nbsp;{recent.userName}
                </div>
              </div>
              <img className="coverImg" src={recent.img} alt="coverimg" />
            </div>
          );
        })}
      </>
    );
  }
}

export default withRouter(Recentbloglist);
