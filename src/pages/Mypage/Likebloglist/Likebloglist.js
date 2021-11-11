import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Likebloglist.scss';

class Likebloglist extends Component {
  goToArticle = value => {
    const { history } = this.props;
    history.push(`/article/${value}`);
  };

  render() {
    const { likeBlogList } = this.props;

    return (
      <>
        {likeBlogList.map((like, idx) => {
          return (
            <div
              key={idx}
              className="blogList"
              onClick={() => {
                this.goToArticle(`${like.id}`);
              }}
            >
              <div className="post">
                <strong className="title">{like.title}</strong>
                <div className="wrapContent">
                  <span className="subTitle">{like.subTitle}</span>
                  <span className="icoBar">|</span>
                  <span className="articleContent">{like.articleContent}</span>
                </div>
                <div className="writer">
                  <i>by</i>&nbsp;&nbsp;{like.userName}
                </div>
              </div>
              <img className="coverImg" src={like.img} alt="coverimg" />
            </div>
          );
        })}
      </>
    );
  }
}

export default withRouter(Likebloglist);
