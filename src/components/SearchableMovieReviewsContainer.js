import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchMovieReviews();
  };

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  fetchMovieReviews = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({
          reviews: data.results
        });
      });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <h4>Search:</h4>
          <input onChange={this.handleChange}></input>
        </form>
        {/* {this.state.reviews ? (
          <MovieReviews reviews={this.state.reviews} />
        ) : (
          ""
        )} */}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
