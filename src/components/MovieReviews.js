import React from 'react'
 
const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
        <ul>
            {reviews.map((review, index) =>
                <li className="review" key={index}>
                    Title: {review.display_title}<br></br>
                    Review By: {review.byline}<br></br>
                    Review Headline: {review.headline}<br></br><br></br>
                </li>
            )}
        </ul>    
    </div>
  )
}
 
export default MovieReviews