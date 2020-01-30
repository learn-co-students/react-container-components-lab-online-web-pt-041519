import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    fetchMovieReviews = () => {
        fetch(URL + `${this.state.searchTerm}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.fetchMovieReviews()
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer;