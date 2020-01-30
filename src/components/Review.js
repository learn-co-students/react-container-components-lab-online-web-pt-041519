import React from 'react';

const Review = ({ title, url, summary }) => (
  <div className="review">
    <a href={url}><h3>{title}</h3></a>
    <p>{summary}</p>
  </div>
)

export default Review;