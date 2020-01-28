// Code MovieReviews Here
import React from "react"
// import { render } from "enzyme"

const MovieReviews = ({ reviews }) => (
    // console.log("Reviews", allReviews),
     <div className="review-list">
            {reviews ? reviews.map(Review) : null }
        </div> 
)

const Review = (reviewInfo) => {
    // if (allReviews && allReviews.map){  
    return(
            <div className="review">
            <h2>Title: {reviewInfo.display_title} </h2>
            <p><b>Mpaa Rating: </b>{reviewInfo.mpaa_rating} * 
            <b> Critics Pick: </b>{reviewInfo.critics_pick} * 
            <b> Byline: </b>{reviewInfo.byline} * 
            <b> Headline:</b> {reviewInfo.headline} * 
            <b> Summary Short:</b> {reviewInfo.summary_short} * 
            <b> Publication Date:</b> {reviewInfo.publication_date} * 
            <b> Opening Date:</b> {reviewInfo.opening_date} * 
            <b> Date Updated:</b> {reviewInfo.date_updated} * 
            <b> Url: </b>{reviewInfo.link.url}</p>
           
           
    </div>
    )
// }
}

export default MovieReviews

// display_title: 'Chhapaak',
//     mpaa_rating: '',
//     critics_pick: 0,
//     byline: 'Teo Bugbee',
//     headline: 'Chhapaak Review: Life and Activism After an Acid Attack',
//     summary_short: 'The movie is based on the life of Laxmi ' +
//       'Agarwal, who was burned with acid in New Delhi ' +
//       '2005.',
//     publication_date: '2020-01-10',
//     opening_date: '2020-01-10',
//     date_updated: '2020-01-24 17:44:02',
//     link: {
//       type: 'article',
//       url: 'http://www.nytimes.com/2020/01/10/movies/chhapaak-review.html',
//       suggested_link_text: 'Read the New York Times Review of Chhapaak'
//     },
//     multimedia: {
//       type: 'mediumThreeByTwo210',
//       src: 'https://static01.nyt.com/images/2020/01/10/arts/09chhapaak/09chhapaak-mediumThreeByTwo210.jpg',
//       width: 210,
//       height: 140
//     }