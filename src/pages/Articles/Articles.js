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
      likesNumber: '231',
    };
  }

  // handleContents =()=> {
  //   fetch(`${API}/users/${this.props.match.params.id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         articleLists: data,
  //       });
  //     });
  // }

  // componentDidMount() {
  //   this.handleContents();
  // }

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
  }

  handleLiked = () => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
    this.handleLikeNumber();
  };

  handleLikeNumber = () => {
    // this.setState({
    //   likesNumber: Number(this.state.likesNumber) ? +1 : -1,
    // });

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
    const { articleLists, isLiked, likesNumber } = this.state;
    return (
      <div className="articles">
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
