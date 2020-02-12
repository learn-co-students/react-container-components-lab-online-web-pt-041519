import React from 'react'

const MovieReviews = (props) => {

	const handleRenderMovies = (props) => {
		debugger
		props.map(movie => {
			<div className="review">
				<p>
					Movie Title: {movie.title}<br/>
					Director: {movie.director}<br/>
					Opening Date: {movie.opening_date}<br/>
					Review: {movie.review}
				</p>
			</div>
		})
	}

	return(
		<div className="review-list">
			<div className="review">
				{handleRenderMovies()}
			</div>
		</div>
	)
}

MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews