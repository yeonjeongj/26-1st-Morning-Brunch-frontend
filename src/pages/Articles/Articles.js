import React from 'react';
import DetailHeader from './DetailContents/DetailHeader/DetailHeader';
import DetailText from './DetailContents/DetailText/DetailText';
import DetailUser from './DetailContents/DetailUser/DetailUser';
import './Articles.scss';

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articleLists: {},
      isLiked: false,
      likesNumber: '231',
      scrollbar: 0,
    };
  }

  handleArticleMain = () => {
    fetch('/data/articlesData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          articleLists: data,
        });
      });
  };

  componentDidMount() {
    this.handleArticleMain();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', !this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollbar: window.scrollY,
    });
  };

  handleLiked = () => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
    this.handleLikeNumber();
  };

  handleLikeNumber = () => {
    const { likesNumber, isLiked } = this.state;

    if (isLiked === false) {
      this.setState({
        likesNumber: Number(likesNumber) + 1,
      });
    } else if (isLiked === true) {
      this.setState({
        likesNumber: Number(likesNumber) - 1,
      });
    }
  };

  render() {
    const { articleLists, isLiked, likesNumber, scrollbar } = this.state;
    return (
      <div className="articles">
        <div className="headerScroll " style={{ width: `${scrollbar}px` }} />
        {articleLists.feeds && (
          <>
            <DetailHeader articleLists={articleLists.feeds.feedsHeader} />
            <DetailText
              articleLists={articleLists.feeds.feedsText}
              isLiked={isLiked}
              handleLiked={this.handleLiked}
              likesNumber={likesNumber}
            />
            <DetailUser articleLists={articleLists.feeds.feedsUser} />
          </>
        )}
      </div>
    );
  }
}

export default Articles;
