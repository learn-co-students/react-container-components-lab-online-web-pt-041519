import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(`${URL}&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    reviews: data.results
                })
            }) 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={ e => this.setState({ searchTerm: e.target.value }) } />
                    <input type="submit" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div> 
        )
    }

}