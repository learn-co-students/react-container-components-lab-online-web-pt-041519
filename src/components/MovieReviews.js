import React from 'react'

const MovieReviews = (props) => {
    const reviewBox = {
        border: '1px solid #000',
        padding: '10px',
        margin: '10px'
    }

    return (
        <div className="review-list">
            {props.reviews.map( m => { 
                return (
                    <div className="review" style={reviewBox} key={m.display_title}>
                        <h3>{m.headline}</h3>
                        {m.summary_short}
                    </div>
                ) 
            } )}
        </div>
    )
}

export default MovieReviews;