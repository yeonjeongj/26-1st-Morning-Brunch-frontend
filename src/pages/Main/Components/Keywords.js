import React from 'react';
import { Link } from 'react-router-dom';
import './Keywords.scss';

class Keywords extends React.Component {
  render() {
    const { keywordsData } = this.props;

    return (
      <section className="keywordContents">
        <h2>MORNING & BRUNCH KEYWORD</h2>
        <span className="subtitle">키워드로 분류된 다양한 브런치 모음</span>
        <div className="keywordWrapper">
          {keywordsData.map(keyword => {
            return (
              <div key={keyword.id}>
                <Link to={keyword.url}>{keyword.keyword}</Link>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Keywords;
