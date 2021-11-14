import React from 'react';
import './DetailUser.scss';
import Button from '../../../../components/Button/Button';

export class DetailUser extends React.Component {
  render() {
    const { articleLists } = this.props;

    return (
      <div className="detailUser">
        {articleLists && (
          <article className="writerInfo">
            <div className="infoWrapper">
              <div
                className="userImg"
                style={{
                  backgroundImage: `url(${articleLists.author.profile_image.url})`,
                }}
              />
              <div className="userInfo">
                <h3>{articleLists.author.name}</h3>
                <div className="tagBtn">
                  <Button text={articleLists.author.user_tag[0]} />
                  <Button text={articleLists.author.user_tag[1]} />
                  <Button text={articleLists.author.user_tag[2]} />
                  <Button text={articleLists.author.user_tag[3]} />
                </div>

                <p className="content">{articleLists.author.introduction}</p>
              </div>
            </div>
          </article>
        )}
      </div>
    );
  }
}

export default DetailUser;
