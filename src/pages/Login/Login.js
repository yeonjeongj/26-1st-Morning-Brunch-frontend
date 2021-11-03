import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idInput: '',
      pwInput: '',
    };
  }

  goToMain = () => {
    this.props.history.push('/Main');
  };

  updateIdInput = e => {
    this.setState({
      idInput: `${e.target.value}`,
    });
  };

  updatePwInput = e => {
    this.setState({
      pwInput: `${e.target.value}`,
    });
  };
  goToSignUp = () => {
    this.props.history.push('/Signup');
  };

  render() {
    const { idInput, pwInput } = this.state;
    const isActiveButton = idInput.includes('@') && pwInput.length >= 5;
    return (
      <body className="login">
        <main>
          <div className="loginWrap">
            <div className="bannerSlide">
              <img src="images/IMG_1227.jpeg" alt="hanoi" />
            </div>
            <div className="loginInner">
              <h1>morning & brunch</h1>
              <form className="loginForm">
                <input
                  id="id"
                  input
                  type="text"
                  placeholder="이메일"
                  onChange={this.updateIdInput}
                />
                <input
                  id="password"
                  input
                  type="password"
                  placeholder="비밀번호"
                  onChange={this.updatePwInput}
                />
                <button
                  className={
                    isActiveButton ? 'changeBtnColor' : 'normalBtnColor'
                  }
                  disabled={!isActiveButton}
                  onClick={this.goToMain}
                >
                  로그인
                </button>
              </form>
              <div className="underLoginForm">
                <div>
                  <Link to="/Signup">회원가입</Link>
                </div>
                <a href="google.com" className="lost">
                  비밀번호 찾기
                </a>
              </div>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default Login;
