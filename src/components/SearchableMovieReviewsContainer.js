import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { render } from 'enzyme';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    render() {
        return (
            <div className='search-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.searchTerm} onChange={this.handleChange} />
                    <button type='submit'>Search</button>
                </form>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL + this.state.searchTerm)
            .then(resp => resp.json())
            .then(data => this.setState({reviews: data.results}))
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

}
