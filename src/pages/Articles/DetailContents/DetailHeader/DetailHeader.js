import React from 'react';
import './DetailHeader.scss';

export class DetailHeader extends React.Component {
  render() {
    const { articleLists } = this.props;
    return (
      <div className="detailHeader">
        {articleLists && (
          <main
            className="mainImg"
            style={{
              backgroundImage: `url(${articleLists.mainImg})`,
            }}
          >
            <div className="mainCover" />
            <div className="mainName">
              <h1>{articleLists.mainName}</h1>
              <p className="intro">{articleLists.mainNickName}</p>
              <p className="date">
                by<span>{articleLists.writerName}</span>
                {articleLists.writeDate}
              </p>
            </div>
          </main>
        )}
      </div>
    );
  }
}

export default DetailHeader;
