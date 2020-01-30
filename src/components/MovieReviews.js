// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
    // console.log(props)
    return (
        <div className="review-list">
            <ul>
                {props.reviews.map(review =>
                <li className="review">{review.display_title}
                    ({review.mpaa_rating}) 
                    - {review.byline} 
                    - {review.headline} 
                    - {review.summary_short}
                    - {review.link.url}
                    ({review.critics_pick})
                    - {review.publication_date}
                </li>
                )}
            
            </ul>
        </div>
    )
}
export default MovieReviews;