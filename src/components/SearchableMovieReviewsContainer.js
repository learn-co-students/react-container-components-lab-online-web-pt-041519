import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
          })
        }

    handleSearch = event => {
        event.preventDefault()

        // if (input !== "") {
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(data => {
            this.setState({ 
                reviews: data.results
            })
        })        
        // }
    }  

    fetchData = (input) => {

    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSearch}>
                    <label>
                    Search
                    <input
                        id="search"
                        name="searchKey"
                        type="text"
                        value={this.searchTerm}
                        onChange={this.handleChange}
                    />
                    </label>
                    <button type="submit">Submit</button>  
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
 
export default SearchableMovieReviewsContainer