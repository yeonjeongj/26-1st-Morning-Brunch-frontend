import React from 'react';
import { SITE_MAP, INFO } from './FooterData';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footerWrapper">
          <section className="footerUp">
            <div className="logoWrapper">
              <h2>morning & brunch</h2>
              <p>
                I always be with you, <br />
                for your morning
              </p>
            </div>

            <ul className="pageList">
              {SITE_MAP.map(link => {
                return <li key={link.id}>{link.content}</li>;
              })}
            </ul>
          </section>

          <section className="footerDown">
            <div className="footerInt">
              <ul>
                {INFO.map(info => {
                  return <li key={info.id}>{info.content}</li>;
                })}
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
