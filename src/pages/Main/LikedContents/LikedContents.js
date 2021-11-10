import React from 'react';
import SlideContent from './SlideContent';
import './LikedContents.scss';

class LikedContents extends React.Component {
  constructor() {
    super();

    this.state = {
      slidePosition: 0,
      activeBtn: '1',
    };
  }

  slideSize = 970;
  hiddenSlideLength = 3;

  handlePrevBtn = e => {
    const { slidePosition, activeBtn } = this.state;
    const { slideSize } = this;

    if (slidePosition >= 0) {
      this.setState({ slidePosition: 0 });
    } else {
      this.setState({
        slidePosition: slidePosition + slideSize,
        activeBtn: (Number(activeBtn) - 1).toString(),
      });
    }
  };

  handleNextBtn = e => {
    const { slidePosition, activeBtn } = this.state;
    const { slideSize, hiddenSlideLength } = this;

    if (slidePosition <= slideSize * -1 * 3) {
      this.setState({ slidePosition: slideSize * -1 * hiddenSlideLength });
    } else {
      this.setState({
        slidePosition: slidePosition - slideSize,
        activeBtn: (Number(activeBtn) + 1).toString(),
      });
    }
  };

  moveToSlide = e => {
    const { slideSize } = this;
    const { value } = e.target;

    this.setState({
      slidePosition: value * slideSize * -1 + slideSize,
      activeBtn: value.toString(),
    });
  };

  render() {
    const { slidePosition, activeBtn } = this.state;
    const { slideSize, hiddenSlideLength } = this;
    const { slideContents } = this.props;

    const isSlideEnd = slidePosition === slideSize * -1 * hiddenSlideLength;
    const isSlideStart = slidePosition === 0;

    return (
      <section className="likedContents">
        <div className="articleWrapper">
          <div
            className="slideDisplay"
            style={{
              transform: `translateX(${slidePosition}px)`,
            }}
          >
            <div className="slideArticles">
              {slideContents.map((content, idx) => {
                return (
                  <SlideContent
                    key={idx}
                    id={content.post_id}
                    backgroundImage={content.cover_image}
                    articleText={content.title}
                    articleAuthor={content.author_name}
                  />
                );
              })}
            </div>
          </div>

          <button
            className={isSlideStart ? 'prevBtn hidden' : 'prevBtn'}
            onClick={this.handlePrevBtn}
          >
            <i class="fas fa-chevron-left" />
          </button>
          <button
            className={isSlideEnd ? 'nextBtn hidden' : 'nextBtn'}
            onClick={this.handleNextBtn}
          >
            <i class="fas fa-chevron-right" />
          </button>
        </div>

        <ul className="contentsOrder">
          {CONTENT_ORDER_DATA.map((data, idx) => {
            return (
              <li
                key={idx}
                value={data.value}
                onClick={this.moveToSlide}
                className={
                  activeBtn === `${data.value}` ? 'numBtn active' : 'numBtn'
                }
              >
                {data.text}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

const CONTENT_ORDER_DATA = [
  { value: '1', text: '01' },
  { value: '2', text: '02' },
  { value: '3', text: '03' },
  { value: '4', text: '04' },
];

export default LikedContents;
