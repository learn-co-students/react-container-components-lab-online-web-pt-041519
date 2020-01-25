import React from 'react'
import Review from './Review'

const MovieReviews = ( {reviews} ) => (
    <div className='review-list'>
        < Review className="review" byline={reviews.byline} headline={reviews.headline} summary={reviews.summary_short}/> 
    </div>
   
)

export default MovieReviews 


