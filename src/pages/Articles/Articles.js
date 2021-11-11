import React from 'react';
import DetailHeader from './DetailContents/DetailHeader/DetailHeader';
import DetailText from './DetailContents/DetailText/DetailText';
import DetailUser from './DetailContents/DetailUser/DetailUser';
import './Articles.scss';
import Nav from '../../components/Nav/Nav';

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articleLists: [],
      isLiked: false,
      likesNumber: '231',
      scrollbar: 0,
    };
  }

  handleArticleMain = () => {
    fetch('/data/articlesData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          articleLists: data.post,
        });
      });
  };

  componentDidMount() {
    this.handleArticleMain();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
    const condition = isLiked === true;
    const number = Number(likesNumber);

    this.setState({
      likesNumber: condition ? number - 1 : number + 1,
    });
  };

  render() {
    const { articleLists, isLiked, likesNumber, scrollbar } = this.state;

    return (
      <>
        <Nav />

        <div className="articles">
          <div
            className="headerScroll "
            style={{ width: `${scrollbar * 1.3}px` }}
          />
          {articleLists && (
            <>
              <DetailHeader articleLists={articleLists[0]} />
              <DetailText
                articleLists={articleLists[0]}
                isLiked={isLiked}
                handleLiked={this.handleLiked}
                likesNumber={likesNumber}
              />
              <DetailUser articleLists={articleLists[0]} />
            </>
          )}
        </div>
      </>
    );
  }
}

export default Articles;
