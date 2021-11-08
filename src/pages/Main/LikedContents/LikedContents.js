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
    const { slideContents1, slideContents2, slideContents3, slideContents4 } =
      this.props;

    const isSlideEnd = slidePosition === slideSize * -1 * hiddenSlideLength;
    const isSlideStart = slidePosition === 0;

    return (
      <section className="likedContents">
        <div className="articleWrapper">
          <ul
            className="slideArticles"
            style={{
              transform: `translateX(${slidePosition}px)`,
            }}
          >
            <li className="slideDisplay1">
              {slideContents1.map(content => {
                return (
                  <SlideContent
                    key={content.id}
                    backgroundImage={content.cover_image_url}
                    articleText={content.title}
                    articleAuthor={content.author_name}
                    contentUrl={content.content_url}
                  />
                );
              })}
            </li>
            <li id="section2" className="slideDisplay2">
              {slideContents2.map(content => {
                return (
                  <SlideContent
                    key={content.id}
                    backgroundImage={content.cover_image_url}
                    articleText={content.title}
                    articleAuthor={content.author_name}
                    contentUrl={content.content_url}
                  />
                );
              })}
            </li>
            <li className="slideDisplay3">
              {slideContents3.map(content => {
                return (
                  <SlideContent
                    key={content.id}
                    backgroundImage={content.cover_image_url}
                    articleText={content.title}
                    articleAuthor={content.author_name}
                    contentUrl={content.content_url}
                  />
                );
              })}
            </li>
            <li className="slideDisplay4">
              {slideContents4.map(content => {
                return (
                  <SlideContent
                    key={content.id}
                    backgroundImage={content.cover_image_url}
                    articleText={content.title}
                    articleAuthor={content.author_name}
                    contentUrl={content.content_url}
                  />
                );
              })}
            </li>
          </ul>

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
          <li
            value="1"
            onClick={this.moveToSlide}
            className={activeBtn === '1' ? 'numBtn active' : 'numBtn'}
          >
            01
          </li>
          <li
            value="2"
            onClick={this.moveToSlide}
            className={activeBtn === '2' ? 'numBtn active' : 'numBtn'}
          >
            02
          </li>
          <li
            value="3"
            onClick={this.moveToSlide}
            className={activeBtn === '3' ? 'numBtn active' : 'numBtn'}
          >
            03
          </li>
          <li
            value="4"
            onClick={this.moveToSlide}
            className={activeBtn === '4' ? 'numBtn active' : 'numBtn'}
          >
            04
          </li>
        </ul>
      </section>
    );
  }
}

export default LikedContents;
