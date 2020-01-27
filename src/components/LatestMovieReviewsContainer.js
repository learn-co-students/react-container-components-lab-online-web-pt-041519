import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AWD3JSAxnSjJqGPz3pHfapfL1w9Cy94B';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

	constructor() {
		super()
		this.state = {
			reviews: []
		}
	}

	componentDidMount() {
		fetch(URL)
			.then(res => res.json())
			.then(reviewData => {
				this.setState({ 
					reviews: reviewData.results
				})
			})
	}

	render() {
		return (
			<div className="latest-movie-reviews">
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}

}