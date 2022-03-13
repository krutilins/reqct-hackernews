import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { HackerNewsItem } from '../types/item';
import { Button, Card } from 'react-bootstrap';

const NewsItem = ({id, title, score, by, time, url, kids}: HackerNewsItem) => {
  const navigate = useNavigate();
  
  const formattedDate = new Date(time).toLocaleDateString('en-us', {
    year: "numeric",
    month: "short",
    day: "numeric"
  })

  const formattedDiscussion = kids && kids.length ? `Comments ${kids.length}` : 'Discuss';

  const handleNavigate = () => {
    navigate(`discussion/${id}`);
  }

  

  return (
    <Card style={{ width: '27rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{by}, {formattedDate}, {score} </Card.Subtitle>
        <div style={{display: "flex", justifyContent: "flex-end"}}>
          <a href={url}><Button variant="link" size="sm">Link</Button></a>
          <Button variant="primary" size="sm" onClick={handleNavigate}>
            {formattedDiscussion}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NewsItem;