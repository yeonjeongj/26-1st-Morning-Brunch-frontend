import React from 'react';
import './Articles.scss';
import Button from '../../components/Button/Button';

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articleLists: [],
      isliked: false,
      like: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-1024.png',
      unLike:
        'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/heart-1024.png',
    };
  }

  hadleArticleMain() {
    fetch('/data/articlesImg.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          articleLists: data,
        });
      });
  }

  componentDidMount() {
    this.hadleArticleMain();
  }

  handleliked = () => {
    this.setState({
      isliked: !this.state.isliked,
    });
  };

  render() {
    console.log(this.state.isliked);
    const { articleLists } = this.state;
    return (
      <div className="articles">
        <main className="mainImg">
          <div className="mainCover" />
          <div className="mainName">
            <h1>한국에서 이런 브런치를!</h1>
            <p className="intro">내가 가본 최고의 브런치 집</p>
            <p className="date">
              by<span>소윤이지롱</span>Oct 28 2021
            </p>
          </div>
        </main>

        <article className="mainText">
          <p>
            <strong>리틀넥</strong> 뉴욕까지 가는 빠른 방법.
            <br />
            <img
              src="https://i.ibb.co/MRPgCq2/Kakao-Talk-Photo-2021-11-06-18-12-01.jpg"
              alt="pancake"
            />
            한국에서도 브런치를 쉽게 즐길 수 있는 리틀넥에 다녀왔습니다.
            <br /> 평소 웨이팅이 길어, 마음속에 담아두기만 했던 가게였는데요.
            <br />
            브레이크타임이 끝나고 맞춰서 방문하니 웨이팅을 하지 않고 들어 갈 수
            있었습니다!
            <br />
            우연인지 운명인지 기다리면서 앉고싶던 자리에 안내를 받아서 즐거운
            식사를 할 수 있었습니다.
            <img
              src="https://i.ibb.co/hHdZCSd/1616862585515.jpg"
              alt="litleneck"
            />
            <strong>
              팬케이크(14,000원) + 고구마 프라이즈 (8,000원) + 부라따
              샐러드(15,000원)
            </strong>
            <br />
            이것저것 먹고 싶은대로 하나씩 주문을 했습니다.
            <br />
            스테크에 함께 나오는 매쉬드 포테이토는 굉장히 부드러웠으며,
            <br />
            팬케이크의 촉촉함은 잊을 수 없는 맛이었습니다.
            <br />
            뉴욕까지 가는 빠른방법. 리틀넥 이었습니다.
            <br />
            주소:서울 용산구 한남대로27길 66
          </p>

          <div className="buttonWrapper">
            <div className="tagBtn">
              <Button text="맛집" />
              <Button text="스테이크" />
              <Button text="팬케이크" />
            </div>

            <div className="heartBtn">
              <p>
                좋아요<span> 3,231</span>
              </p>
              <div
                className="icon"
                onClick={this.handleliked}
                style={{
                  backgroundImage: `url(${
                    this.state.isliked ? this.state.like : this.state.unLike
                  })`,
                }}
              />
            </div>
          </div>
        </article>

        <article className="writerInfo">
          <div className="infoWrapper">
            <div className="userImg" />
            <div className="userInfo">
              <h3>소윤이지롱</h3>
              <p className="nickName">블로거</p>

              <p className="content">
                음식을 사랑하는 음식을 좋아하는 맛있는것이 제일 좋아 예쁜곳을
                좋아해요 정보공유 제일좋아
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Articles;
