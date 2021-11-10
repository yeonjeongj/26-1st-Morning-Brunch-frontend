import React from 'react';
import './Signup.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      idInput: '',
      pwInput: '',
      pwcfInput: '',
      authorNameInput: '',
      authorJobInput: '',
      authorIntroInput: '',
    };
  }

  goToLogin = () => {
    const { history } = this.props;
    history.push('/');
  };

  updateInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submitUserInfo = e => {
    const {
      idInput,
      pwInput,
      authorNameInput,
      authorJobInput,
      authorIntroInput,
    } = this.state;
    e.preventDefault();
    fetch('http://10.58.4.223:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: idInput,
        password: pwInput,
        author_name: authorNameInput,
        author_job: authorJobInput,
        author_intro: authorIntroInput,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.MESSAGE === 'SUCCESS') {
          alert('회원가입 성공');
          this.goToLogin();
        } else {
          alert('회원가입 실패');
        }
      });
  };

  render() {
    const { idInput, pwInput, pwcfInput, authorNameInput, authorJobInput } =
      this.state;

    const isActiveButton =
      idInput.includes('@') &&
      idInput.includes('.') &&
      pwInput.length >= 8 &&
      pwInput === pwcfInput &&
      authorNameInput.length >= 2 &&
      authorJobInput.length >= 2;

    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const emailCheck = emailRegex.test(idInput);

    const pwCheck = passwordRegex.test(pwInput);

    return (
      <main className="signUp">
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
                  placeholder="이메일*"
                  name="idInput"
                  onChange={this.updateInputs}
                />
                {emailCheck && (
                  <img
                    className="check"
                    src="images/SignUpcheck.png"
                    alt="check"
                  />
                )}
              </div>
              <div className="inputDiv">
                <input
                  id="password"
                  type="password"
                  placeholder="비밀번호* (영문 대소문자, 숫자, 특수문자 포함 8자 이상)"
                  name="pwInput"
                  onChange={this.updateInputs}
                />
                {pwCheck && (
                  <img
                    className="check"
                    src="images/SignUpcheck.png"
                    alt="check"
                  />
                )}
              </div>
              <div className="inputDiv">
                <input
                  id="passwordConfirm"
                  type="password"
                  placeholder="비밀번호 확인*"
                  name="pwcfInput"
                  onChange={this.updateInputs}
                />
                {pwInput === pwcfInput && pwInput.length >= 8 && (
                  <img
                    className="check"
                    src="images/SignUpcheck.png"
                    alt="check"
                  />
                )}
              </div>
              <input
                id="authorName"
                type="text"
                placeholder="작가명(필명)*"
                name="authorNameInput"
                onChange={this.updateInputs}
              />
              <input
                id="authorJob"
                type="text"
                placeholder="직업*"
                name="authorJobInput"
                onChange={this.updateInputs}
              />
              <textarea
                id="authorIntro"
                maxLength="100"
                placeholder="작가소개"
                name="authorIntroInput"
                onChange={this.updateInputs}
              />
              <button
                className={
                  isActiveButton ? 'commonBtn ableBtn' : 'commonBtn disableBtn'
                }
                disabled={!isActiveButton}
                onClick={this.submitUserInfo}
              >
                가입하기
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Signup;
