import React from 'react';
import LikedContents from './LikedContents/LikedContents';
import Keywords from './Keywords/Keywords';
import Authors from './Authors/Authors';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      keywordsData: [],
      usersData: [],
      slideContents: [],
    };
  }

  handleKeywordsData = () => {
    fetch('data/main/keywordsData.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          keywordsData: data,
        })
      );
  };

  handleUsersData = () => {
    fetch('data/main/usersData.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          usersData: data,
        })
      );
  };

  handleSlideContents = () => {
    fetch('data/main/slideContents.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          slideContents: data,
        })
      );
  };

  componentDidMount() {
    this.handleKeywordsData();
    this.handleUsersData();
    this.handleSlideContents();
  }

  render() {
    const { keywordsData, usersData, slideContents } = this.state;

    return (
      <div className="main">
        <section className="mainDescription">
          <h1>맛을 나누는 공간, 아침엔 브런치</h1>
          <p>나를 사로잡은 매력적인 브런치를 소개해 보세요.</p>
          <p> 그리고 다시 느껴보세요.</p>
          <p> 세상 모든 곳의 즐거움을.</p>
        </section>
        <LikedContents slideContents={slideContents} />
        <Keywords keywordsData={keywordsData} />
        <Authors usersData={usersData} />
      </div>
    );
  }
}

export default Main;
