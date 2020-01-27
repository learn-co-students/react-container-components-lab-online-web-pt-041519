import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
        constructor(props){
            super(props)
    
            this.state = {
                reviews: [],
                stateTerm: ''
            }
        }
    
        componentDidMount = event => {
            fetch(URL)
            .then(resp => resp.json())
            .then(movieReviews => 
                // console.log(movieReviews.results)
                this.setState({ 
                    reviews: movieReviews.results, 
                    stateTerm: event.target.value
                })
                )
            }
            
        render(){
            return(
                <div className="latest-movie-reviews">
                    
                    <MovieReviews allReviews={this.state.reviews} searchTerms={this.state.searchTerm}/>
                </div>
            )
    }
    
    }