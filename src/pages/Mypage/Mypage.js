import React, { Component } from 'react';
import Bloglist from './Bloglist/Bloglist';
import Likebloglist from './Likebloglist/Likebloglist';
import Recentbloglist from './Recentbloglist/Recentbloglist';
import Button from '../../components/Button/Button';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import { API } from '../../config';
import './Mypage.scss';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      openMyBlog: true,
      myBlogList: [],
      likeBlogList: [],
      recentBlogList: [],
      userInfo: [],
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
    fetch(`${API}/users/user/2`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          userInfo: data.user,
        })
      );
  };

  componentDidMount() {
    this.handleUserData();

    fetch(`${API}/users/user/2`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          myBlogList: data.user[0].post,
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
    return (
      <>
        <Nav />
        <div className="myPage">
          <main>
            <div className="myPageCover" />
            {userInfo.length > 0 && (
              <div className="myPageWrap">
                <div className="myImg">
                  <img
                    className="thumb"
                    src={userInfo[0].profile_image.url}
                    alt="thumb"
                  />
                </div>
                <div className="myProfile">
                  <div className="myUser">{userInfo[0].name}</div>
                  <div className="myUserIntro">{userInfo[0].introduction}</div>
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
                      <img
                        className="more"
                        src="./images/mymore.png"
                        alt="more"
                      />
                    </div>
                  </dl>
                </div>
              </div>
            )}
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
              className={
                openMyBlog ? 'inActiveLikeBlogBtn' : 'activeLikeBlogBtn'
              }
            >
              Recent & Like
            </button>
          </div>
          {openMyBlog ? (
            <div className="myBlog">
              <ul>
                <Bloglist myBlogList={myBlogList} />
              </ul>
            </div>
          ) : (
            <div className="likeInner">
              <div className="likePost">좋아요한 글 {'>'}</div>
              <div className="likeBlog">
                <Likebloglist likeBlogList={likeBlogList} />
              </div>
              <div className="recentPost">최근 본 글 {'>'}</div>
              <div className="recentBlog">
                <Recentbloglist recentBlogList={recentBlogList} />
              </div>
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Mypage;
