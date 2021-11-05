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
    const { history } = this.props;
    history.push('/Main');
  };

  updateInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnClick = e => {
    const { idInput, pwInput } = this.state;
    e.preventDefault();
    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        email: idInput,
        password: pwInput,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          this.goToMain();
        } else alert('아이디와 비밀번호를 다시 확인하세요');
      });
  };

  goToSignUp = () => {
    const { history } = this.props;
    history.push('/Signup');
  };

  render() {
    const { idInput, pwInput } = this.state;
    const isActiveButton =
      idInput.includes('@') && idInput.includes('.') && pwInput.length >= 8;
    return (
      <div className="login">
        <main>
          <div className="loginWrap">
            <div className="bannerSlide">
              <img src="images/login1.jpg" alt="login1" />
            </div>
            <div className="loginInner">
              <h1>morning & brunch</h1>
              <form className="loginForm">
                <input
                  input
                  type="text"
                  placeholder="이메일"
                  name="idInput"
                  onChange={this.updateInputs}
                />
                <input
                  input
                  type="password"
                  placeholder="비밀번호"
                  name="pwInput"
                  onChange={this.updateInputs}
                />
                <button
                  className={
                    isActiveButton ? 'changeBtnColor' : 'normalBtnColor'
                  }
                  disabled={!isActiveButton}
                  onClick={this.handleOnClick}
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
      </div>
    );
  }
}

export default Login;
