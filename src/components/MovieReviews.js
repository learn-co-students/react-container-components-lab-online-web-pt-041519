// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
    console.log(props)
    return (
        <div className="review-list">
            <ul>
                {props.reviews.map(review =>
                <li>{review.display_title}
                    ({review.mpaa_rating}) 
                    - {review.byline} 
                    - {review.headline} 
                    ({review.critics_pick})
                    - {review.publication_date}
                </li>
                )}
            
            </ul>
        </div>
    )
}
export default MovieReviews;