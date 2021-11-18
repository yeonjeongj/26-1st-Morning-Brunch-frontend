import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Bloglist.scss';

class Bloglist extends Component {
  goToArticle = value => {
    const { history } = this.props;
    history.push(`/articles/${value}`);
  };

  render() {
    const { myBlogList } = this.props;

    return (
      <>
        {myBlogList.map((blog, idx) => {
          return (
            <li
              key={idx}
              className="blogList"
              onClick={() => {
                this.goToArticle(`${blog.id}`);
              }}
            >
              <div className="post">
                <strong className="title">{blog.title}</strong>
                <div className="wrapContent">
                  <span className="subTitle">{blog.sub_title}</span>
                  <span className="icoBar">|</span>
                  <span
                    className="articleContent"
                    dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
                  />
                </div>
              </div>
              <img
                className="coverImg"
                src={blog.cover_image.url}
                alt="coverimg"
              />
            </li>
          );
        })}
      </>
    );
  }
}

export default withRouter(Bloglist);
