import React from 'react';
// import Nav from '../../components/Nav/Nav';
// import Header from '../../components/Header/Header';
import LikedContents from './LikedContents/LikedContents';
import Keywords from './Keywords/Keywords';
import Authors from './Authors/Authors';
// import Footer from '../../components/Footer/Footer';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      keywordsData: [],
      usersData: [],
      slideContents1: [],
      slideContents2: [],
      slideContents3: [],
      slideContents4: [],
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

  handleSlideContents1 = () => {
    fetch('data/main/slideContents1.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          slideContents1: data,
        })
      );
  };

  handleSlideContents2 = () => {
    fetch('data/main/slideContents2.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          slideContents2: data,
        })
      );
  };

  handleSlideContents3 = () => {
    fetch('data/main/slideContents3.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          slideContents3: data,
        })
      );
  };

  handleSlideContents4 = () => {
    fetch('data/main/slideContents4.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          slideContents4: data,
        })
      );
  };

  componentDidMount() {
    this.handleKeywordsData();
    this.handleUsersData();
    this.handleSlideContents1();
    this.handleSlideContents2();
    this.handleSlideContents3();
    this.handleSlideContents4();
  }

  render() {
    const {
      keywordsData,
      usersData,
      slideContents1,
      slideContents2,
      slideContents3,
      slideContents4,
    } = this.state;

    return (
      <div className="main">
        {/* <Nav /> */}
        {/* <Header /> */}
        <header>
          <h1>맛을 나누는 공간, 아침엔 브런치</h1>
          <p>나를 사로잡은 매력적인 브런치를 소개해 보세요.</p>
          <p> 그리고 다시 느껴보세요.</p>
          <p> 세상 모든 곳의 즐거움을.</p>
        </header>
        <LikedContents
          slideContents1={slideContents1}
          slideContents2={slideContents2}
          slideContents3={slideContents3}
          slideContents4={slideContents4}
        />
        <Keywords keywordsData={keywordsData} />
        <Authors usersData={usersData} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;
