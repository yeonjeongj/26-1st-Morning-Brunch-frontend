import React from 'react';
import { withRouter } from 'react-router-dom';

class SlideContent extends React.Component {
  linkToContent = () => {
    const { history, id } = this.props;
    history.push(`/article/${id}`);
  };

  render() {
    const { backgroundImage, articleText, articleAuthor } = this.props;

    return (
      <div className="slideContent" onClick={this.linkToContent}>
        <p className="articleText">{articleText}</p>
        <p className="articleAuthor">by&nbsp;&nbsp;{articleAuthor}</p>
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className="articleImage"
        />
        <div className="cover" />
      </div>
    );
  }
}

export default withRouter(SlideContent);
