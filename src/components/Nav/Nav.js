import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Nav.scss';
import Button from '../Button/Button';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      userLists: [],
    };
  }

  hadleUserData() {
    fetch('/data/userData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(res =>
        this.setState({
          userLists: res,
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
    return (
      <div className="mainNav">
        <nav className={this.state.isOpen ? 'openNav' : 'closeNav'}>
          <div className="toggle-btn" onClick={this.openMenu}>
            <span />
            <span />
            <span />
          </div>

          <div className="userInfo">
            <div className="userImg">
              <img src="userImg" />
            </div>
            <h4>독자</h4>
            <p>어쩌구저쩌구</p>
          </div>

          <ul className="loginNav">
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
      </div>
    );
  }
}

export default withRouter(Nav);
