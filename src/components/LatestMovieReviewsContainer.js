import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

    constructor(props){
        super(props)

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL) 
        .then(res => res.json())
        .then(data => this.setState({reviews: data.results}))
    }

    renderReviews = () => {
        return this.state.reviews.map(reviews => {
          return (
            <div className="latest-movie-review" key={reviews.display_title}>
              < MovieReviews reviews={reviews} />
            </div>
          )
        })
      }

    render(){
        return(
        <div className="latest-movie-reviews">
            {this.renderReviews()}
        </div>
        )}
}
