import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component { 

  constructor() {
    super();

    this.state = {
      time: undefined,
      pancakes: [],
      cooked: 0,
      burnt: 0,
      raw: 0
    };
  }

	render() {
		return (
			<div></div>
			)
	}


}

export default SearchableMovieReviewsContainer;
