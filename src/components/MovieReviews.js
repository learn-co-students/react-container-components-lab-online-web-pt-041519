// Code MovieReviews Here

import React from "react";
import Review from "./Review";

export default function MovieReviews({ reviews }) {
  return (
    <div className="review-list">
      {/* {console.log(reviews)} */}
      {reviews.map(review => (
        <Review
          key={review.display_title + review.byline}
          title={review.display_title}
          rating={review.mpaa_rating}
          critics={review.critics_pick}
          byline={review.byline}
          headline={review.headline}
          summary={review.summary_short}
          pubDate={review.publication_date}
          link={review.link.url}
          image={review.multimedia ? review.multimedia.src : ""}
        />
      ))}
    </div>
  );

  MovieReviews.defaultProps = {
    reviews: []
  };
}
