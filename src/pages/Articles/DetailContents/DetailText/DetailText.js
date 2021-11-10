import React from 'react';
import './DetailText.scss';
import { ICON_IMG } from './ICON_IMG';
import Button from '../../../../components/Button/Button';

export class DetailText extends React.Component {
  render() {
    const { articleLists, handleLiked, isLiked, likesNumber } = this.props;

    return (
      <div className="detailText">
        {articleLists && (
          <article className="mainText">
            <div
              className="textWrapper"
              dangerouslySetInnerHTML={{ __html: `${articleLists.content}` }}
            />

            <div className="buttonWrapper">
              <div className="tagBtn">
                <Button text={articleLists.tags[0]} />
                <Button text={articleLists.tags[1]} />
                <Button text={articleLists.tags[2]} />
              </div>

              <div className="heartBtn">
                <p>
                  좋아요 <span>3,{likesNumber}</span>
                </p>
                <div
                  className="icon"
                  onClick={handleLiked}
                  style={{
                    backgroundImage: `url(${
                      isLiked ? `${ICON_IMG.like}` : `${ICON_IMG.unLike}`
                    })`,
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
