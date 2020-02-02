import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${URL}${this.state.searchTerm}`)
        fetch(URL + `${this.state.searchTerm}`)
            .then(response => response.json())
            .then( data  => {
                this.setState({ 
                    reviews: data.results
                })
            }  
        )        
    }


    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" id="text" placeholder="Search Reviews" onChange={ this.handleChange }></input>
                    <button type="submit" >Submit</button>
                </form>
                < MovieReviews reviews={ this.state.reviews }/>
            </div>
        )
    }
}
