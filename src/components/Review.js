import React from 'react'

const Review = movieData => (
    <div>
        <h1>{movieData.headline}</h1>
            <h3>{movieData.byline}</h3>
            <p>{movieData.summary}</p>
    </div>

)

export default Review 