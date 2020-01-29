import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";
// import fetch from "node-fetch";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    this.fetchMovieReviews();
  }

  // fetchMovieReviews = async () => {
  //   const res = await fetch(URL);
  //   const data = await res.json();
  //   console.log(data);
  //   console.log(data.results);
  //   this.setState({
  //     reviews: data.results
  //   });
  // };

  // async await is NOT WORKING
  fetchMovieReviews = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data.results
        });
      });
  };

  render() {
    return (
      <div className="latest-movie-reviews">
        <h3>Latest Movie Reviews</h3>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
