import React from 'react';
import './Signup.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      idInput: '',
      pwInput: '',
      pwcfInput: '',
      authorInput: '',
      jobInput: '',
      introInput: '',
      emailInput: false,
    };
  }

  goToLogin = () => {
    this.props.history.push('/Login');
  };

  updateNameInput = e => {
    this.setState({
      nameInput: `${e.target.value}`,
    });
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

  updatePwcfInput = e => {
    this.setState({
      pwcfInput: `${e.target.value}`,
    });
  };

  updateAuthorInput = e => {
    this.setState({
      authorInput: `${e.target.value}`,
    });
  };

  updateJobInput = e => {
    this.setState({
      jobInput: `${e.target.value}`,
    });
  };

  updateIntroInput = e => {
    this.setState({
      introInput: `${e.target.value}`,
    });
  };

  checkEmail = e => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    this.setState({
      emailInput: regExp.test(e.target.value),
    });
    // console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value));
  };

  render() {
    const {
      nameInput,
      idInput,
      pwInput,
      pwcfInput,
      authorInput,
      jobInput,
      introInput,
      emailInput,
    } = this.state;
    console.log(emailInput);

    const isActiveButton =
      nameInput.length >= 2 &&
      authorInput.length >= 2 &&
      jobInput.length >= 2 &&
      idInput.includes('@') &&
      idInput.includes('.') &&
      pwInput.length >= 8 &&
      pwInput === pwcfInput;
    return (
      <div className="signUp">
        <main>
          <div className="signUpWrap">
            <div className="signUpLogo">
              <h1>morning & brunch</h1>
            </div>
            <div className="signUpInner">
              <form className="signUpForm">
                <div className="inputDiv">
                  <input
                    id="id"
                    type="text"
                    placeholder="이메일"
                    onChange={this.updateIdInput}
                    onChange={this.checkEmail}
                  />
                  {emailInput && (
                    <img
                      className="check"
                      src="images/SignUpcheck.png"
                      alt="check"
                    />
                  )}
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="비밀번호 (8자 이상의 영문 대소문자, 숫자, 특수문자 포함)"
                  onChange={this.updatePwInput}
                />
                <input
                  id="passwordConfirm"
                  type="password"
                  placeholder="비밀번호 확인"
                  onChange={this.updatePwcfInput}
                />
                <input
                  id="name"
                  type="text"
                  placeholder="이름"
                  onChange={this.updateNameInput}
                />
                <input
                  id="authorName"
                  type="text"
                  placeholder="작가명(필명)"
                  onChange={this.updateAuthorInput}
                />
                <input
                  id="authorJob"
                  type="text"
                  placeholder="직업"
                  onChange={this.updateJobInput}
                />
                <textarea
                  id="authorIntro"
                  maxLength="70"
                  placeholder="작가소개"
                  onChange={this.updateIntroInput}
                />
                <button
                  className={
                    isActiveButton ? 'changeBtnColor' : 'normalBtnColor'
                  }
                  disabled={!isActiveButton}
                  onClick={this.goToLogin}
                >
                  회원가입
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Signup;
// 유효성 검사가 true가 되면 setState로
