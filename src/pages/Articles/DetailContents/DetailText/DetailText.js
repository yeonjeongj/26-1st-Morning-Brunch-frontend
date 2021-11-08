import React from 'react';
import './DetailText.scss';
import Button from '../../../../components/Button/Button';

export class DetailText extends React.Component {
  render() {
    const { articleLists, handleLiked, isLiked, like, unLike } = this.props;
    return (
      <>
        {articleLists && (
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
              브레이크타임이 끝나고 맞춰서 방문하니 웨이팅을 하지 않고 들어 갈
              수 있었습니다!
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
                <Button text={articleLists.feedstag[0]} />
                <Button text={articleLists.feedstag[1]} />
                <Button text={articleLists.feedstag[2]} />
              </div>

              <div className="heartBtn">
                <p>
                  좋아요<span> 3,231</span>
                </p>
                <div
                  className="icon"
                  onClick={handleLiked}
                  style={{
                    backgroundImage: `url(${isLiked ? like : unLike})`,
                  }}
                />
              </div>
            </div>
          </article>
        )}
      </>
    );
  }
}

export default DetailText;
