import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      userLists: {},
    };
  }

  hadleUserData() {
    console.log('handleUserData실행');

    fetch('/data/userData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data =>
        this.setState({
          userLists: data,
        })
      );
  }

  componentDidMount() {
    this.hadleUserData();
  }

  openMenu = () => {
    if (this.state.isOpen === false) {
      this.setState({
        isOpen: true,
      });
    } else {
      this.setState({
        isOpen: false,
      });
    }
  };

  hotItem = e => {
    this.props.history.push('/articles');
  };

  goMypage = e => {
    this.props.history.push('/mypage');
  };

  goLogin = e => {
    this.props.history.push('/login');
  };

  render() {
    const { userLists } = this.state;
    console.log(userLists);
    return (
      // <nav className={`nav ${isOpen ? "open" : "close"}`}>
      <>
        <div className="toggleBtn" onClick={this.openMenu}>
          <span />
          <span />
          <span />
        </div>

        <nav className={!this.state.isOpen ? 'openNav' : 'closeNav'}>
          {/* <div className="toggle-btn" onClick={this.openMenu}>
          <span />
          <span />
          <span />
        </div> */}
          <div className="userInfo">
            <div
              className="userImg"
              style={{
                background: `url(${userLists.userImg})`,
              }}
            ></div>
            <h4>
              {userLists.userName}
              <span>{userLists.userNickName}</span>
            </h4>
            <p>{userLists.content}</p>
          </div>
          <ul className="mainNav">
            <li>
              <Link to="/main">브런치 홈</Link>
            </li>
            <li>
              <Link to="/mypage">내 브런치</Link>
            </li>
          </ul>
          <div className="hotTopic" onClick={this.hotItem}>
            <h4>
              지금-핫한 <br />
              게시물 보러가기
            </h4>
          </div>
          <div className="settings">
            <Button text="설정" onClick={this.goMypage} />
            <Button text="로그아웃" onClick={this.goLogin} />
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(Nav);
