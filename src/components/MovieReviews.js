import React from 'react';
import Review from './Review';

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map((review, index) => <Review 
      title={review.headline} 
      url={review.link.url} 
      key={review.headline+index}
      summary={review.summary_short}
      />) }
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;