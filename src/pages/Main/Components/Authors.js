import React from 'react';
import Button from '../../../components/Button/Button';
import './Authors.scss';

class Authors extends React.Component {
  render() {
    const { usersData } = this.props;

    return (
      <section className="authorContents">
        <h2>MORNING & BRUNCH WRITERS</h2>
        <span className="subtitle">브런치 추천 작가</span>
        <div className="authorKeywordBtns">
          <Button text="비건" />
          <Button text="아메리칸 스타일" />
          <Button text="요리고수" />
        </div>
        <div className="authorWrapper">
          {usersData.map(author => {
            return (
              <div key={author.id} className="authorCard">
                <img alt="author" src={author.image} />
                <span className="authorName">{author.author_name}</span>
                <span className="authorJob">{author.author_job}</span>
                <p>{author.author_intro}</p>
                <div className="authorKeywordBtn">
                  <Button text={author.keyword[0]} />
                  <Button text={author.keyword[1]} />
                  <Button text="&middot;&middot;&middot;" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Authors;
