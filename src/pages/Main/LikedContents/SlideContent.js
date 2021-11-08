import React from 'react';
import { Link } from 'react-router-dom';

class SlideContent extends React.Component {
  render() {
    const { key, backgroundImage, contentUrl, articleText, articleAuthor } =
      this.props;

    return (
      <div className="slideContent" key={key}>
        <Link to={contentUrl}>
          <p className="articleText">{articleText}</p>
          <p className="articleAuthor">by&nbsp;&nbsp;{articleAuthor}</p>
          <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="articleImage"
          />
          <div className="cover" />
        </Link>
      </div>
    );
  }
}

export default SlideContent;
