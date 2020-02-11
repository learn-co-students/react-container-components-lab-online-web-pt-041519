import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component { 

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

  componentDidMount() {
		fetch(URL)
	      .then(response => response.json())
	      .then(data => {
	      	debugger
	      	let gif_url_array = []
	      	for(let i = 0; i<=2; i++) {
	      		gif_url_array.push(data.data[i].images.original.url)
	      	}
	      	this.setState({gifs: gif_url_array})
	      })
	}

	render() {
		return (
			<div></div>
			)
	}


}

export default LatestMovieReviewsContainer;
