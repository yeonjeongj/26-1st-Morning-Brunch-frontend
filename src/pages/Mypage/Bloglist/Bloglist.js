import React from 'react';
import { Component } from 'react';
import './Bloglist.scss';

class Bloglist extends React.Component {
  render() {
    return (
      <li className="blogList">
        <div className="post">
          <strong className="title">이건 제목</strong>
          <div className="wrapContent">
            <em className="subTitle">이건 소제목</em>
            <span className="icoBar">|</span>
            <span className="articleContent">
              하하하하하루루루후후호호호호로호호호코딩재밌다
            </span>
          </div>
        </div>
        <img className="coverImg" src="{}" alt="coverimg" />
      </li>
    );
  }
}

export default Bloglist;
