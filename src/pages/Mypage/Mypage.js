import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Bloglist from './Bloglist/Bloglist';
import Likebloglist from './Likebloglist/Likebloglist';
import Recentbloglist from './Recentbloglist/Recentbloglist';
import './Mypage.scss';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      openMyBlog: true,
      myBlogList: [],
      likeBlogList: [],
      recentBlogList: [],
      userInfo: {},
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

  handleUserData = () => {
    fetch('./data/myinfo.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          userInfo: data,
        })
      );
  };

  componentDidMount() {
    this.handleUserData();

    fetch('./data/blogmock.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          myBlogList: data,
        });
      });
    fetch('./data/likeblogmock.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          likeBlogList: data,
        });
      });
    fetch('/data/recentblogmock.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          recentBlogList: data,
        });
      });
  }

  render() {
    const { openMyBlog, myBlogList, likeBlogList, recentBlogList, userInfo } =
      this.state;
    const { userName, userIntro, userImg } = userInfo;

    return (
      <div className="myPage">
        <main>
          <div className="myPageCover" />
          <div className="myPageWrap">
            <div className="myImg">
              <img className="thumb" src={userImg} alt="thumb" />
            </div>
            <div className="myProfile">
              <div className="myUser">{userName}</div>
              <div className="myUserIntro">{userIntro}</div>
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
            Recent & Like
          </button>
        </div>
        {openMyBlog ? (
          <div className="myBlog">
            <ul>
              {myBlogList.map(blog => {
                return (
                  <Bloglist
                    key={blog.id}
                    title={blog.title}
                    subtitle={blog.subTitle}
                    articlecontent={blog.articleContent}
                    img={blog.img}
                  />
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="likeInner">
            <div className="likePost">좋아요한 글 {'>'}</div>
            <div className="likeBlog">
              {likeBlogList.map(like => {
                return (
                  <Likebloglist
                    key={like.id}
                    username={like.userName}
                    title={like.title}
                    subtitle={like.subTitle}
                    articlecontent={like.articleContent}
                    img={like.img}
                  />
                );
              })}
            </div>
            <div className="recentPost">최근 본 글 {'>'}</div>
            <div className="recentBlog">
              {recentBlogList.map(recent => {
                return (
                  <Recentbloglist
                    key={recent.id}
                    username={recent.userName}
                    title={recent.title}
                    subtitle={recent.subTitle}
                    articlecontent={recent.articleContent}
                    img={recent.img}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Mypage;
