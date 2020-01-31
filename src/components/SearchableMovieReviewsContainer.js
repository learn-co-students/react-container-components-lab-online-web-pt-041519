import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

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

  // Set searchTerm from input field
  handleChange = event => this.setState(
    {searchTerm: event.target.value}
  );

  // Fetch reviews on submit
  handleSubmit = event => {
    event.preventDefault();
    fetch(URL+this.state.searchTerm)
      .then(response => response.json())
      .then(reviewData => this.setState({ reviews: reviewData.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Searchable Reviews</h2>
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