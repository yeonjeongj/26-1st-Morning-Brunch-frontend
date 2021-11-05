import React from 'react';
import './Signup.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      idInput: '',
      emailCkInput: false,
      pwInput: 'password',
      pwCkInput: false,
      pwcfInput: 'passwordconfirm',
      pwcfCkInput: false,
      authorNameInput: '',
      authorJobInput: '',
      authorIntroInput: '',
    };
  }

  goToLogin = () => {
    const { history } = this.props;
    history.push('/Login');
  };

  updateInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  checkEmail = e => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    this.setState({
      emailCkInput: emailRegex.test(e.target.value),
    });
  };

  checkPassword = e => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.setState({
      pwCkInput: passwordRegex.test(e.target.value),
    });
  };

  checkPasswordConfirm = e => {
    const { pwInput, pwcfInput } = this.state;
    const passwordcfRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (pwInput === pwcfInput && passwordcfRegex.test(e.target.value) == true) {
      this.setState({
        pwcfCkInput: true,
      });
    } else {
      this.setState({ pwcfCkInput: false });
    }
  };

  handleOnClick = e => {
    const {
      idInput,
      pwInput,
      authorNameInput,
      authorJobInput,
      authorIntroInput,
    } = this.state;
    e.preventDefault();
    fetch('http://10.58.1.183:8000/users/signup', {
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
        if (response.message === 'SUCCESS') {
          alert('회원가입 완료');
          this.goToLogin();
        } else {
          alert('회원가입 실패');
        }
      });
  };

  render() {
    const {
      idInput,
      emailCkInput,
      pwInput,
      pwCkInput,
      pwcfInput,
      pwcfCkInput,
      authorNameInput,
      authorJobInput,
    } = this.state;

    const isActiveButton =
      authorNameInput.length >= 2 &&
      authorJobInput.length >= 2 &&
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
                    placeholder="이메일*"
                    name="idInput"
                    onChange={this.updateInputs}
                    onKeyUp={this.checkEmail}
                  />
                  {emailCkInput && (
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
                    onKeyUp={this.checkPassword}
                  />
                  {pwCkInput && (
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
                    onKeyUp={this.checkPasswordConfirm}
                  />
                  {pwcfCkInput && (
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
                    isActiveButton ? 'changeBtnColor' : 'normalBtnColor'
                  }
                  disabled={!isActiveButton}
                  onClick={this.handleOnClick}
                >
                  가입하기
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
