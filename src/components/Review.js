import React from "react";

export default function Review({
  title,
  rating,
  critics,
  byline,
  headline,
  summary,
  pubDate,
  link,
  image
}) {
  return (
    <div>
      <h5>{title}</h5>
      <a href={link}>{headline}</a>
      <br />
      <img src={image} alt={summary}></img>
      <p>{summary}</p>
      <p>
        <span>rating: {rating ? rating : "N/A"} </span> |
        <span> critics: {critics} </span> | <span>author: {byline} </span>
      </p>
      <br />
    </div>
  );
}
