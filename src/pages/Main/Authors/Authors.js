import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { API } from '../../../config';
import './Authors.scss';

class Authors extends React.Component {
  constructor() {
    super();

    this.state = {
      usersData: [],
      activeBtn: 'firstBtn',
    };
  }

  handleUsersData = () => {
    fetch('data/main/usersData.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          usersData: data,
        })
      );
  };

  isBtnActive = (btnNum, keyword) => {
    this.setState({ activeBtn: btnNum });

    fetch(`${API}?keyword=${keyword}&limit=6`)
      .then(res => res.json())
      .then(res => this.setState({ usersData: res }));
  };

  linkToContent = value => {
    const { history } = this.props;
    history.push(`/articles/${value}`);
  };

  componentDidMount() {
    this.handleUsersData();
  }

  render() {
    const { usersData, activeBtn } = this.state;

    return (
      <section className="authorContents">
        <h2>MORNING & BRUNCH WRITERS</h2>
        <span className="subtitle">모닝엔 브런치 추천 작가</span>
        <div className="authorKeywordBtns">
          {KEYWORD_BTN_DATA.map((data, idx) => {
            return (
              <Button
                key={idx}
                text={data.text}
                onClick={() =>
                  this.isBtnActive(`${data.btnNum}`, `${data.text}`)
                }
                style={activeBtn === `${data.btnNum}` ? true : false}
              />
            );
          })}
        </div>
        <div className="authorWrapper">
          {usersData.map((author, idx) => {
            return (
              <div key={idx} className="authorCard">
                <img alt="author" src={author.image} />
                <span className="authorName">{author.author_name}</span>
                <span className="authorJob">{author.author_job}</span>
                <p>{author.author_intro}</p>
                <div className="authorKeywordBtns">
                  <Button
                    text={author.keyword[0]}
                    onClick={() =>
                      this.linkToContent(author.keyword[0].post_id)
                    }
                  />
                  <Button
                    text={author.keyword[1]}
                    onClick={() =>
                      this.linkToContent(author.keyword[1].post_id)
                    }
                  />
                  <Button
                    text={author.keyword[2]}
                    onClick={() =>
                      this.linkToContent(author.keyword[2].post_id)
                    }
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

const KEYWORD_BTN_DATA = [
  { text: '비건', btnNum: 'firstBtn' },
  { text: '아메리칸 스타일', btnNum: 'secondBtn' },
  { text: '요리고수', btnNum: 'thirdBtn' },
];

export default withRouter(Authors);
