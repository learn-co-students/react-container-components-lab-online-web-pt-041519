import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchBox from './SearchBox'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            reviews: [],
            searchTerm: null
        }
    }


    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const query = `&query=${this.state.searchTerm}`
        const newURL = URL + query  
        fetch(newURL)
        .then(res => res.json())
        .then(data => this.setState({reviews: data.results}))
    }

    renderReviews = () => {
        return this.state.reviews.map(reviews => {
          return (
            <div className="latest-movie-review" key={reviews.display_title}>
              < MovieReviews reviews={reviews} key={reviews.display_title}/>
            </div>
          )
        })
      }


    render(){
        return(<div className="searchable-movie-reviews">
            < SearchBox handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.searchTerm} />
            {this.renderReviews()}

        </div>
        )}
}