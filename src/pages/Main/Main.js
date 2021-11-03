import React from 'react';
// import Nav from '../../components/Nav/Nav';
// import Header from '../../components/Header/Header';
// import LikedContents from './Components/LikedContents';
import Keywords from './Components/Keywords';
import Authors from './Components/Authors';
// import Footer from '../../components/Footer/Footer';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      keywordsData: [],
      usersData: [],
    };
  }

  handleKeywordsData = () => {
    fetch('data/main/keywordsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          keywordsData: data,
        })
      );
  };

  handleUsersData = () => {
    fetch('data/main/usersData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          usersData: data,
        })
      );
  };

  componentDidMount() {
    this.handleKeywordsData();
    this.handleUsersData();
  }

  render() {
    const { keywordsData, usersData } = this.state;

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
        {/* <LikedContents /> */}
        <Keywords keywordsData={keywordsData} />
        <Authors usersData={usersData} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;
