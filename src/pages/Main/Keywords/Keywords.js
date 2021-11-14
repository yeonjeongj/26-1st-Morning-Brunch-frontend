import React from 'react';
import { withRouter } from 'react-router-dom';
import './Keywords.scss';

class Keywords extends React.Component {
  linkToContent = value => {
    const { history } = this.props;
    history.push(`/articles/${value}`);
  };

  render() {
    const { keywordsData } = this.props;

    return (
      <section className="keywordContents">
        <h2>MORNING & BRUNCH KEYWORD</h2>
        <span className="subtitle">키워드로 분류된 다양한 브런치 모음</span>
        <div className="keywordWrapper">
          {keywordsData &&
            keywordsData.map((keyword, index) => {
              return (
                <div
                  key={index}
                  onClick={() => this.linkToContent(`${keyword.post_id}`)}
                >
                  {keyword.tag}
                </div>
              );
            })}
        </div>
      </section>
    );
  }
}

export default withRouter(Keywords);
