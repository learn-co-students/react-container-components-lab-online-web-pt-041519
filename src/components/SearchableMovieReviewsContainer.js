import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleUserInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=4PVtIAQfEimEP54x1G4a113OVGMC6P8y&query=<${this.state.searchTerm}>`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({
                reviews: myJson.results
            })
            })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    value={this.state.searchTerm}
                    onChange={event => this.handleUserInputChange(event)}
                    />
                    <button type="submit">Submit</button>
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer