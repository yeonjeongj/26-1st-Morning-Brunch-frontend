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
              backgroundImage: `url(${articleLists.cover_image.url})`,
            }}
          >
            <div className="mainCover" />
            <div className="mainName">
              <h1>{articleLists.title}</h1>
              <p className="intro">{articleLists.sub_title}</p>
              <p className="date">
                by<span>{articleLists.author.name}</span>
                {articleLists.creat_time.slice(0, 10)}
              </p>
            </div>
          </main>
        )}
      </div>
    );
  }
}

export default DetailHeader;
