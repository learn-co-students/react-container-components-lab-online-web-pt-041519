import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
const formSubmitURL = `${URL}&query=`

// Code SearchableMovieReviewsContainer Here

 class SearchableMovieReviewsContainer extends Component {
        constructor(props){
            super(props)
    
            this.state = {
                reviews: [],
                searchTerm: ''
            }
        }
    
        componentDidMount = event => {
            fetch(URL)
            .then(resp => resp.json())
            .then(movieReviews => {

                // console.log("testing", movieReviews.results)
                this.setState({ 
                    reviews: movieReviews.results, 
                    // searchTerm: event.target.value
                })
            }
                )
            }

handleSubmit = event => {
    event.preventDefault()
    if (this.state.searchTerm === "") return
    fetch(formSubmitURL + this.state.searchTerm)
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results})    
        )
}  

handleChange = event => {
    this.setState({searchTerm: event.target.value})
}
            
        render(){
            return(
                <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                    
                </form>
                <div className="latest-movie-reviews">
                    
                    <MovieReviews reviews={this.state.reviews} searchTerms={this.state.searchTerm}/>
                </div>
                </div>
            )
    }
    
    }

    export default SearchableMovieReviewsContainer