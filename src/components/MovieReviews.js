import React from 'react';

const Review = ({ headline, summary_short, link }) => (
    <div className="review" key={headline}>
      <a href={link.url}><h3>{headline}</h3></a>
      <p>{summary_short}</p>
    </div>
);

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;