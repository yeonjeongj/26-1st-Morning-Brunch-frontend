import React from 'react';
import reactDom from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import Header from '../Header/Header';
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
    fetch('/data/userData.json', {
      method: 'GET',
    })
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

  handleOpenNav = () => {
    if (this.state.isOpen === false) {
      this.setState({
        isOpen: true,
      });
    }
  };

  handleCloseNav = () => {
    if (this.state.isOpen === true) {
      this.setState({
        isOpen: false,
      });
    }
  };

  goToPlace = link => {
    const { history } = this.props;
    history.push(`${link}`);
  };

  render() {
    const { userLists, isOpen } = this.state;
    const { userImg, userName, userNickName, content } = this.state.userLists;
    return (
      <>
        <Header openMenu={this.handleOpenNav} isOpen={isOpen} />

        <div
          className={isOpen ? 'closeModal' : 'openModal'}
          onClick={this.handleCloseNav}
        />
        <nav className="basicNav">
          <div className={isOpen ? 'openNav' : 'closeNav'}>
            <div className="userInfo">
              <div
                className="userImg"
                style={{
                  backgroundImage: `url(${userImg})`,
                }}
              ></div>
              <h4>{userNickName}</h4>
              <p>{content}</p>
            </div>
            <ul className="mainNav">
              <li>
                <Link to="/main">브런치 홈</Link>
              </li>
              <li>
                <Link to="/mypage">내 브런치</Link>
              </li>
            </ul>
            <div
              className="hotTopic"
              onClick={() => this.goToPlace`${'/articles'}`}
            >
              <h4>
                지금-핫한 <br />
                게시물 보러가기
              </h4>
            </div>
            <div className="settings">
              <Button
                text="설정"
                onClick={() => this.goToPlace`${'/mypage'}`}
              />
              <Button
                text="로그아웃"
                onClick={() => this.goToPlace`${'/login'}`}
              />
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(Nav);
