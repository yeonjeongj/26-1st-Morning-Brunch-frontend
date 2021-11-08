import React from 'react';
import { Link } from 'react-router-dom';

class SlideContent extends React.Component {
  render() {
    const { key, backgroundImage, contentUrl, articleText, articleAuthor } =
      this.props;

    return (
      <div key={key} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Link to={contentUrl}>
          <p className="articleText">{articleText}</p>
          <p className="articleAuthor">by&nbsp;&nbsp;{articleAuthor}</p>
          <div className="cover" />
        </Link>
      </div>
    );
  }
}

export default SlideContent;
