// Code MovieReviews Here
import React, { Component } from 'react'

// You are free to lay out each review as you like using the data that the API returns, but make sure that the component outputs a top-level element with the class review-list and that each review is wrapped by an element with class review.


const MovieReviews = props => {
    return (
        <div className="review-list">
         {props.reviews.map(m => <p className="review">{m.display_title}</p>)}
        </div>
    )
}
 
export default MovieReviews

