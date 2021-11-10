import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

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

  submitUserInfo = e => {
    const { idInput, pwInput } = this.state;

    e.preventDefault();
    fetch('http://10.58.4.223:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: idInput,
        password: pwInput,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.MESSAGE === 'SUCCESS') {
          this.goToMain();
        } else alert('아이디와 비밀번호를 다시 확인하세요');
      });
  };

  render() {
    const { idInput, pwInput } = this.state;
    const isActiveButton =
      idInput.includes('@') && idInput.includes('.') && pwInput.length >= 8;

    return (
      <section className="login">
        <div className="loginWrap">
          <img
            className="mainImage"
            alt="morning&brunch"
            src="images/login1.jpg"
          />
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
                  isActiveButton ? 'commonBtn ableBtn' : 'commonBtn disableBtn'
                }
                disabled={!isActiveButton}
                onClick={this.submitUserInfo}
              >
                로그인
              </button>
            </form>
            <div className="underLoginForm">
              <Link to="/Signup">회원가입</Link>
              <Link to="/find" className="lost">
                비밀번호 찾기
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
