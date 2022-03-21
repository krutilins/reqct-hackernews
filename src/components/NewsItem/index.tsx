import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { HackerNewsItem } from '../../types/item';
import ThemeContext from '../../context/themes';

function NewsItem(props: HackerNewsItem) {
  const {
    id, title, score, by, time, url, kids,
  } = props;
  const navigate = useNavigate();

  const formattedDate = new Date(time).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedDiscussion = kids && kids.length ? `Comments ${kids.length}` : 'Discuss';

  const handleNavigate = () => {
    navigate(`discussion/${id}`);
  };

  return (
    <ThemeContext.Consumer>
      {(state) => (
        <Card style={{ width: '27rem', background: state.background, color: state.color }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>
              {by}
              ,
              {' '}
              {formattedDate}
              ,
              {' '}
              {score}
              {' '}
            </Card.Subtitle>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href={url}><Button variant="link" size="sm">Link</Button></a>
              <Button variant="primary" size="sm" onClick={handleNavigate}>
                {formattedDiscussion}
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </ThemeContext.Consumer>
  );
}

export default NewsItem;
