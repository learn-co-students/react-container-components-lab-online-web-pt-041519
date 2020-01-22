import React from 'react'

const MovieReviews = props => {
    return (
        <div className="review-list">
            <ul>
                {props.reviews.map(review =>
                <li className="review">{review.display_title} - {review.mpaa_rating} - {review.critics_pick} - {review.byline} - {review.headline}</li>
                )}
            </ul>

        </div>
    )
}

export default MovieReviews

