import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// import SearchForm from './SearchForm'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  handleChange = event => this.setState({searchTerm: event.target.value});

  handleSubmit = event => {
    event.preventDefault();

    fetch(URL+this.state.searchTerm)
      .then(response => response.json())
      .then(reviewData => this.setState({ reviews: reviewData.results }));
  };

  // Fetch giphy data and store first 3 in state
  // fetchReviews = (query = 'star wars') => {
  //   fetch(URL+`&query=${query}`)
  //   .then(response => response.json())
  //   .then(reviewData => this.setState({ reviews: reviewData.results }))
    // .then(reviewData => console.log(reviewData))
  // }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Searchable Reviews</h2>
        {/* <SearchForm fetchReviews={this.fetchReviews} /> */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
          
export default SearchableMovieReviewsContainer;

