import React from 'react'

const MovieReviews = props => {
    return (
      <div className='review-list'>
        {props.reviews.map(r => {         
         return(
           <div className='review'>
               <a href={r.link.url}>{r.display_title} ({r.mpaa_rating ? r.mpaa_rating : 'N/A'})</a><br/>
               Author: {r.byline}<br/>
               Plot Summary: {r.summary_short}<br/><br/>
           </div>
         )})}
      </div>
    )
  }

export default MovieReviews
