import React from 'react';

import * as L from './style.js';

const Listing = props => {
  return (
    <L.Wrapper>
      {props.articles &&
        props.articles.map((article, index) => (
          <L.Tile
            key={index}
            className={`tile animated ${
              index % 2 ? 'bounceInRight' : 'bounceInLeft'
            }`}
            delay={index}
          >
            <L.Thumbnail className="mask">
              <img className="test" src={article.thumb} alt={article.slug} />
            </L.Thumbnail>
            <L.Title>{article.title_long}</L.Title>
            <L.CTA onClick={() => props.onSelectArticle(article)}>
              VIEW case study
            </L.CTA>
          </L.Tile>
        ))}
    </L.Wrapper>
  );
};

export default Listing;
