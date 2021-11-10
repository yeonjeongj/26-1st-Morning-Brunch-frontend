import React from 'react';
import './DetailText.scss';
import Button from '../../../../components/Button/Button';

export class DetailText extends React.Component {
  render() {
    const like =
      'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-1024.png';
    const unLike =
      'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/heart-1024.png';
    const { articleLists, handleLiked, isLiked, likesNumber } = this.props;
    let text = articleLists.text;

    return (
      <div className="detailText">
        {articleLists && (
          <article className="mainText">
            <div
              className="textWrapper"
              dangerouslySetInnerHTML={{ __html: text }}
            />

            <div className="buttonWrapper">
              <div className="tagBtn">
                <Button text={articleLists.feedstag[0]} />
                <Button text={articleLists.feedstag[1]} />
                <Button text={articleLists.feedstag[2]} />
              </div>

              <div className="heartBtn">
                <p>
                  좋아요 <span>3,{likesNumber}</span>
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
      </div>
    );
  }
}

export default DetailText;
