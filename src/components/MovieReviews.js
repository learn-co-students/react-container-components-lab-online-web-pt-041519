import React from 'react'


const MovieReviews = props => {

    
   return(
        <ol className="review-list"> 
            { props.reviews.map( review =>
                <li className="review" key={review.link.url + Math.random() * (10 - 1)} onClick={props.handleClick}>
                    <h3>{review.display_title}</h3>
                    <img src={review.multimedia.src} alt={review.display_title}></img>
                    <p>{review.summary_short}</p> 
                </li>
            )}
        </ol>
    )
}  
    

export default MovieReviews
