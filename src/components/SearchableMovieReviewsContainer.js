import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

   constructor(props) {
      super(props)

      this.state = {
         reviews: [],
         searchTerm: ""
      }
   }

   handleSearch = (event) => {
      this.setState({
         seartchTerm: event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault()
      this.fetchReviewsFromSearch()
   }

   fetchReviewsFromSearch() {
     fetch(`${URL}` + `${NYT_API_KEY}` + `&query=` + `${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(data => {
         this.setState({
            reviews: data.results
         })
      })
   }


   render() {
      return (
         <div>
            <form onSubmit={event => this.handleSubmit(event)}>
               {/* search bar + button*/}
               <label>Search: <input id="search" name="search" type="text" onChange={event => this.handleSearch(event)}/></label>
               <button type="Submit"> Submit Search</button>
            </form>

            <MovieReviews reviews={this.state.reviews}/>
         </div>
      )
   }

}