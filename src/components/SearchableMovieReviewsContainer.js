import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component { 

	constructor() {
	  super();

      this.state = {
        searchTerm: "",
        reviews: []
      };
    }

	handleSearchChange = event => {
		this.setState({searchTerm: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.handleSearch(this.state.searchTerm)
	}

	handleSearch = (search_string) => {
		fetch(URL+`&query=${search_string}`)
		    .then(response => response.json())
		    .then(data => {
				this.handleSetState(data)
		    })
	}

	handleSetState = (data) => {
		this.setState({reviews: data.results})
	}

	renderMovies = () => {
			if (this.state.reviews.length > 0) {
				return <MovieReviews movies={this.state.reviews} />
			}
		}


	render() {
		return (
			<div className="searchable-movie-reviews">
				<div className="search-form">
					<form onSubmit={event => this.handleSubmit(event)}>
						<input type="text" onChange={event => this.handleSearchChange(event)} value={this.state.searchTerm}/>
						<input type="submit"/>
					</form>
				</div>

				<div className="search-movie-results">
					{this.renderMovies()}
				</div>	

			</div>
			)
	}


}

export default SearchableMovieReviewsContainer;
