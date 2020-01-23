import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component{

    constructor() {
        super()

        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${URL} + &query=${this.state.searchTerm}`)
            .then(response => response.json())
            .then(data => this.setState({ reviews: data.results }))

    }


    render() {
        return (
            <div>
                <h1>Search for a movie</h1>
              <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={event => this.setState({ searchTerm: event.target.value })} />
                    <br></br>
                    <button type="submit">Submit</button>
              </form>
              <MovieReviews reviews={this.state.reviews} /> 
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer;