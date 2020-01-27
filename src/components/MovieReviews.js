// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
	return (
		<div className="review-list">
			{ reviews.map((review) => {
				return(
					<div key={reviews.indexOf(review)} className="review">
						<h2>"{review.display_title}" Review by {review.byline}</h2>
						<a href={review.link.url}>{review.display_title}</a>
					</div>
				)
			})}
		</div>
	)
}

MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews