import React from 'react';
import './LikedContents.scss';

class LikedContents extends React.Component {
  render() {
    return (
      <section className="likedContents">
        <div className="articleWrapper">
          <ul>
            <li>
              <div className="imgDisplay1">
                <div className="firstImg">
                  <img alt="brunch with coffee" src="/images/main/coffee.jpg" />
                </div>
                <div className="secondImg">
                  <img alt="dumpling" src="/images/main/dumpling.jpg" />
                  <img alt="yogurt" src="/images/main/yogurt.jpg" />
                </div>
              </div>
            </li>
            {/* <li>
            <div className="imgDisplay2">
              <div>
                <img alt="brunch with coffee" src="/images/main/coffee.jpg" />
              </div>
              <div>
                <img alt="brunch with coffee" src="/images/main/coffee.jpg" />
              </div>
              <div>
                <img alt="brunch with coffee" src="/images/main/coffee.jpg" />
              </div>
            </div>
          </li>
          <li>
            <div className="imgDisplay3">
              <div>
                <img alt="soup" src="/images/main/soup.jpg" />
              </div>
              <div>
                <img alt="noodle" src="/images/main/noodle.jpg" />
              </div>
              <div>
                <img alt="brunch with coffee" src="/images/main/coffee.jpg" />
              </div>
              <div>
                <img alt="noodle" src="/images/main/noodle.jpg" />
              </div>
            </div>
          </li> */}
          </ul>
          <ul>
            <li>01</li>
            <li>02</li>
            <li>03</li>
            <li>04</li>
            <li>05</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default LikedContents;
