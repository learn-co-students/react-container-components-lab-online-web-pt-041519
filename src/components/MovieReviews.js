// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        <p>{console.log(reviews)}</p>
        {reviews.map(review => <h3 className="review">{review.display_title} | Rated: {review.mpaa_rating} | Summary: {review.summary_short}</h3>)}
    </div>

)
export default MovieReviews;