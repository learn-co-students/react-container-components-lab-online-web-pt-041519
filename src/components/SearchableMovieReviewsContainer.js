import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key='

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: '',
        reviews: [],
    }

    handleSearch  = event => {
        this.setState({
            searchTerm: event.target.value
        })
    } 

     handleSubmit(event) {
        event.preventDefault()
        this.getReviews()
    }
    
    getReviews() {
        fetch(`${URL}` + `${NYT_API_KEY}` + `&query=` + `${this.state.searchTerm}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }
    
    render() {
        return(
            <div>

                <form onSubmit={event => this.handleSubmit(event)}>
                    <div> 
                        <label>Search: <input id="search" name="search" type="text" onChange={event => this.handleSearch(event)}/></label>
                    </div>
                    <div>
                        <button type="submit">Search</button>
                    </div>
                </form>

                <MovieReviews reviews={this.state.reviews}/>
                
                <p>--------------------------------------------------------------</p>

            </div>
        )
    }

    // componentDidMount() {
    //     console.log(`${URL}` + `${NYT_API_KEY}` + `&query=` + `${this.state.searchTerm}`)
    //     fetch(`${URL}` + `${NYT_API_KEY}` + `&query=` + `${this.state.searchTerm}`)
    //     // fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ&query=hello')
    //     // fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=` + `dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ` + ``)
    //     .then(res => res.json())
    //     .then(data => console.log(data.results))
    //     // .then(res => res.json())
    //     // .then(data => {
    //     //     this.setState({
    //     //         reviews: data.results
    //     //     })
    //     // }) //then data
    // }


}