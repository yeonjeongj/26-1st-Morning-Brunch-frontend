import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import Header from '../Header/Header';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = { isHamburgerClicked: false, userLists: {} };
    this.hamburgerRef = React.createRef();
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

  goToPlace = link => {
    const { history } = this.props;
    history.push(`${link}`);
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    this.hadleUserData();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.hamburgerRef.current.contains(event.target)) {
      this.setState({
        isHamburgerClicked: true,
      });
    } else {
      this.setState({
        isHamburgerClicked: false,
      });
    }
  };

  handleClick = () => {
    this.setState({ isHamburgerClicked: this.state.isHamburgerClicked });
  };

  handleStop = e => {
    e.stopPropagation();
  };

  render() {
    const { isHamburgerClicked } = this.state;
    const { userImg, userNickName, content } = this.state.userLists;
    return (
      <nav className="Navigation">
        <Header
          onClick={this.handleClick}
          targetHamburger={this.hamburgerRef}
        />
        <div
          className={`popup ${isHamburgerClicked ? '' : 'hide'}`}
          onMouseDown={this.handleStop}
          id="slideNav"
        >
          <div className="userInfo">
            <div
              className="userImg"
              style={{
                backgroundImage: `url(${userImg})`,
              }}
            />
            <h4>{userNickName}</h4>
            <p>{content}</p>
          </div>
          <div className="mainNav">
            <div>
              <Link to="/main">브런치 홈</Link>
            </div>
            <div>
              <Link to="/mypage">내 브런치</Link>
            </div>
          </div>
          <div
            className="hotTopic"
            onClick={e => {
              this.goToPlace`${'/articles'}`;
              e.preventDefault();
            }}
          >
            <h4>
              지금-핫한 <br />
              게시물 보러가기
            </h4>
          </div>
          <div className="settings">
            <Button text="설정" onClick={() => this.goToPlace`${'/mypage'}`} />
            <Button
              text="로그아웃"
              onClick={() => this.goToPlace`${'/login'}`}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
