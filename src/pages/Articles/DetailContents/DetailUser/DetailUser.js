import React from 'react';
import './DetailUser.scss';

export class DetailUser extends React.Component {
  render() {
    const { articleLists } = this.props;
    return (
      <>
        {articleLists && (
          <article className="writerInfo">
            <div className="infoWrapper">
              <div
                className="userImg"
                style={{
                  backgroundImage: `url(${articleLists.userImg})`,
                }}
              />
              <div className="userInfo">
                <h3>{articleLists.userName}</h3>
                <p className="nickName">{articleLists.userNickName}</p>

                <p className="content">{articleLists.userInfo}</p>
              </div>
            </div>
          </article>
        )}
      </>
    );
  }
}

export default DetailUser;
