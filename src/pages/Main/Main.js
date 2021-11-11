import React from 'react';
// import {API} from '../../config';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import LikedContents from './LikedContents/LikedContents';
import Keywords from './Keywords/Keywords';
import Authors from './Authors/Authors';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      slideContents: [],
      keywordsData: [],
    };
  }

  // `${API}/main/LikeContent?limit=14`

  handleSlideContents = () => {
    fetch('data/main/slideContents.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          slideContents: data.liked_contents_data,
        })
      );
  };

  // `${API}/main/keyword`

  handleKeywordsData = () => {
    fetch('data/main/keywordsData.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          keywordsData: data.keyword_data,
        })
      );
  };

  componentDidMount() {
    this.handleSlideContents();
    this.handleKeywordsData();
  }

  render() {
    const { keywordsData, slideContents } = this.state;

    return (
      <>
        <Nav />
        <div className="main">
          <section className="mainDescription">
            <h1>맛을 나누는 공간, 아침엔 브런치</h1>
            <p>나를 사로잡은 매력적인 브런치를 소개해 보세요.</p>
            <p> 그리고 다시 느껴보세요.</p>
            <p> 세상 모든 곳의 즐거움을.</p>
          </section>
          <LikedContents slideContents={slideContents} />
          <Keywords keywordsData={keywordsData} />
          <Authors />
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
