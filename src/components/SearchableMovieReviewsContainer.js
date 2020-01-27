import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AWD3JSAxnSjJqGPz3pHfapfL1w9Cy94B';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

	constructor() {
		super()
		this.state = {
			reviews: [],
			searchTerm: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		fetch(URL + this.state.searchTerm)
			.then(res => res.json())
			.then(reviewData => {
				this.setState({
					reviews: reviewData.results
				})
			})
	}

	render() {
		return (
			<div className="searchable-movie-reviews">
				<form onSubmit={event => this.handleSubmit(event)}>
					<input onChange={this.handleChange} type="text" value={this.state.searchTerm} />
					<button type="submit">Search</button>
				</form>
        {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}

}