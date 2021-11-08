import React from 'react';
import './Mypage.scss';

class Mypage extends React.Component {
  render() {
    return (
      <div className="myPage">
        <main>
          <div className="myPageCover" />
          <div className="myPageWrap">
            <div className="myImg" />
            <div className="myProfile">
              <div className="myUser">유신</div>
              <div className="myUserIntro">유신의 브런치입니다.</div>
              <dl class="follower">
                <dd>
                  <em>구독자</em>
                  <span>0</span>
                </dd>
                <dd>
                  <em>관심작가</em>
                  <span>1</span>
                </dd>
              </dl>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Mypage;
