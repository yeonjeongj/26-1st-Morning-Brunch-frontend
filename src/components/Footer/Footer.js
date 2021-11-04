import React from 'react';
import './Footer.scss';
import Nav from '../Nav/Nav';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="footerWrapper">
          <section class="footerUp">
            <div class="logoWrapper">
              <h2>morning & brunch</h2>
              <p>
                I always be with you, <br />
                for your morning
              </p>
            </div>

            <ul>
              <li>이용약관</li>
              <li>개인정보처리 방침</li>
              <li>고객센터</li>
              <li>운영정책</li>
            </ul>
          </section>

          <section class="footerDown">
            <div class="footerInt">
              <ul>
                <li>권상현</li>
                <li>김유신</li>
                <li>박소윤</li>
                <li>유병문</li>
                <li>장연정</li>
              </ul>
              <p>사업장주소 : 서울특별시 강남구 테헤란로 427, 위워크타워</p>
            </div>

            <p>Copyright © 2021 m&b. All rights reserved.</p>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
