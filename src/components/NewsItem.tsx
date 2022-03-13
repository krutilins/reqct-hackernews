import React from 'react';
import {Link} from 'react-router-dom';
import { HackerNewsItem } from '../types/item';

const NewsItem = ({id, title, score, by, time, url, kids}: HackerNewsItem) => {
  return (
    <>
      <div>
        <a href={url}>{title}</a>
      </div>
      <div>
        <span>{by}</span>
        <span>{score}</span>
        <span>{new Date(time).toLocaleDateString('en-us', {
          year: "numeric",
          month: "short",
          day: "numeric"
        })}</span>
        <span>
          <Link to={`discussion/${id}`}>{kids && kids.length ? `comments ${kids.length}` : 'discuss'}</Link>
        </span>
      </div>
    </>
  );
}

export default NewsItem;