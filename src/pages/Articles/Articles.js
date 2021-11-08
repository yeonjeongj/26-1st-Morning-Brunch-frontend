import React from 'react';
import DetailHeader from './DetailContents/DetailHeader/DetailHeader';
import DetailText from './DetailContents/DetailText/DetailText';
import DetailUser from './DetailContents/DetailUser/DetailUser';

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articleLists: {},
      isLiked: false,
      like: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-1024.png',
      unLike:
        'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/heart-1024.png',
    };
  }

  hadleArticleMain() {
    fetch('/data/articlesData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          articleLists: data,
        });
      });
  }

  componentDidMount() {
    this.hadleArticleMain();
  }

  handleLiked = () => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
  };

  render() {
    const { articleLists, like, unLike, isLiked, handleLiked } = this.state;
    return (
      <>
        {articleLists.feeds && (
          <div className="articles">
            <DetailHeader articleLists={articleLists.feeds.feedsHeader} />
            <DetailText
              articleLists={articleLists.feeds.feedsText}
              like={like}
              unLike={unLike}
              isLiked={isLiked}
              handleLiked={handleLiked}
            />
            <DetailUser articleLists={articleLists.feeds.feedsUser} />
          </div>
        )}
      </>
    );
  }
}

export default Articles;
