import React from 'react';
import { withRouter } from 'react-router-dom';

class SlideContent extends React.Component {
  linkToContent = () => {
    const { history } = this.props;
    const { post_id } = this.props.slideContent;
    history.push(`/article/${post_id}`);
  };

  render() {
    const { title, author_name, cover_image } = this.props.slideContent;

    return (
      <div className="slideContent" onClick={this.linkToContent}>
        <p className="articleText">{title}</p>
        <p className="articleAuthor">by&nbsp;&nbsp;{author_name}</p>
        <div
          style={{ backgroundImage: `url(${cover_image})` }}
          className="articleImage"
        />
        <div className="cover" />
      </div>
    );
  }
}

export default withRouter(SlideContent);
