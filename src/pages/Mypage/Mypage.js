import React from 'react';
import Button from '../../components/Button/Button';
import Bloglist from './Bloglist/Bloglist';
import './Mypage.scss';

class Mypage extends React.Component {
  constructor() {
    super();
    this.state = {
      openMyBlog: true,
      myBlogList: [],
    };
  }
  openMyBlog = () => {
    this.setState({
      openMyBlog: true,
    });
  };
  openLikeBlog = () => {
    this.setState({
      openMyBlog: false,
    });
  };

  render() {
    const { openMyBlog, myBlogList } = this.state;
    return (
      <div className="myPage">
        <main>
          <div className="myPageCover" />
          <div className="myPageWrap">
            <div className="myImg">
              <img className="thumb" src="./images/login2.jpg" alt="thumb" />
            </div>
            <div className="myProfile">
              <div className="myUser">유신</div>
              <div className="myUserIntro">유신의 브런치입니다.</div>
              <dl className="follower">
                <dd>
                  <em>구독자</em>
                  <span>0</span>
                </dd>
                <dd>
                  <em>관심작가</em>
                  <span>1</span>
                </dd>
                <div className="btnMore">
                  <Button text="글쓰기" style={true} />
                  <img className="more" src="./images/mymore.png" alt="more" />
                </div>
              </dl>
            </div>
          </div>
        </main>
        <div className="blogLike">
          <button
            onClick={this.openMyBlog}
            className={openMyBlog ? 'activeMyBlogBtn' : 'inActiveMyBlogBtn'}
          >
            내가 쓴 글
          </button>
          <button
            onClick={this.openLikeBlog}
            className={openMyBlog ? 'inActiveLikeBlogBtn' : 'activeLikeBlogBtn'}
          >
            Recent&Like
          </button>
        </div>
        {openMyBlog ? (
          <div className="myBlog">
            <ul>
              {myBlogList.map(blog => {
                return <Bloglist bloglist={blog} />;
              })}
            </ul>
          </div>
        ) : (
          <div className="likeBlog">
            <div>sup</div>
          </div>
        )}
        <div />
      </div>
    );
  }
}

export default Mypage;
