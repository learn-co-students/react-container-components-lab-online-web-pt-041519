import React from 'react'

const MovieReviews = (props) => {


	const handleRenderMovies = (props) => {

		if (props.movies.length > 0 ) {
			return props.movies.map(movie => {
				// console.log(movie)
				return <div className="review">
					<p>
						Movie Title: {movie.display_title}<br/>
						Director: {movie.byline}<br/>
						Opening Date: {movie.opening_date}<br/>
						Review: {movie.summary_short}
					</p>
				</div>
			})			
		}

	}

	return (
		<div className="review-list">
				{handleRenderMovies(props)}
		</div>
	)
}

export default MovieReviews