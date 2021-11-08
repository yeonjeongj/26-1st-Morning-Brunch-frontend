import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import './Authors.scss';

class Authors extends React.Component {
  constructor() {
    super();

    this.state = {
      activeBtn: 'firstBtn',
    };
  }

  isBtnActive = value => {
    this.setState({ activeBtn: value });
  };

  linkToContent = value => {
    const { history } = this.props;
    history.push(value);
  };

  render() {
    const { usersData } = this.props;
    const { activeBtn } = this.state;

    return (
      <section className="authorContents">
        <h2>MORNING & BRUNCH WRITERS</h2>
        <span className="subtitle">모닝엔 브런치 추천 작가</span>
        <div className="authorKeywordBtns">
          {keywordBtnData.map((data, index) => {
            return (
              <Button
                key={index}
                text={data.text}
                onClick={() => this.isBtnActive(`${data.btnNum}`)}
                style={activeBtn === `${data.btnNum}` ? true : false}
              />
            );
          })}
        </div>
        <div className="authorWrapper">
          {usersData.map(author => {
            return (
              <div key={author.id} className="authorCard">
                <img alt="author" src={author.image} />
                <span className="authorName">{author.author_name}</span>
                <span className="authorJob">{author.author_job}</span>
                <p>{author.author_intro}</p>
                <div className="authorKeywordBtns">
                  <Button
                    text={author.keyword[0]}
                    onClick={() => this.linkToContent(author.content_url)}
                  />
                  <Button
                    text={author.keyword[1]}
                    onClick={() => this.linkToContent(author.content_url)}
                  />
                  <Button
                    text={author.keyword[2]}
                    onClick={() => this.linkToContent(author.content_url)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

const keywordBtnData = [
  { text: '비건', btnNum: 'firstBtn' },
  { text: '아메리칸 스타일', btnNum: 'secondBtn' },
  { text: '요리고수', btnNum: 'thirdBtn' },
];

export default withRouter(Authors);
