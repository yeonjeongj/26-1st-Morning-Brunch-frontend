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
    fetch(`${API}/posts/authors?tag=비건&limit=6`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          usersData: data.data,
        })
      );
  };

  updateUsersData = keyword => {
    fetch(`${API}/posts/authors?tag=${keyword}&limit=6`)
      .then(res => res.json())
      .then(res => this.setState({ usersData: res.data }));
  };

  isBtnActive = (btnNum, keyword) => {
    this.setState({ activeBtn: btnNum }, () => this.updateUsersData(keyword));
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
            const { text, btnNum } = data;
            return (
              <Button
                key={idx}
                text={text}
                onClick={() => this.isBtnActive(`${btnNum}`, `${text}`)}
                style={activeBtn === `${btnNum}` ? true : false}
              />
            );
          })}
        </div>
        <div className="authorWrapper">
          {usersData.length > 0 &&
            usersData.map((author, idx) => {
              const {
                user_image,
                author_name,
                author_job,
                author_intro,
                post_id,
                post_tag,
              } = author;
              return (
                <div key={idx} className="authorCard">
                  <img alt="author" src={user_image} />
                  <span className="authorName">{author_name}</span>
                  <span className="authorJob">{author_job}</span>
                  <p>{author_intro}</p>
                  <div className="authorKeywordBtns">
                    <Button
                      text={post_tag[0]}
                      onClick={() => this.linkToContent(post_id[0])}
                    />
                    <Button
                      text={post_tag[1]}
                      onClick={() => this.linkToContent(post_id[1])}
                    />
                    <Button
                      text={post_tag[2]}
                      onClick={() => this.linkToContent(post_id[2])}
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
  { text: '캠핑마니아', btnNum: 'secondBtn' },
  { text: '맛집 블로거', btnNum: 'thirdBtn' },
];

export default withRouter(Authors);
