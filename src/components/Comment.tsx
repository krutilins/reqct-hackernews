import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { getItemById } from '../api/HackerNewsApi';
import { HackerNewsItem } from '../types/item';

const Comment = ({id}: {id: number}) => {
  const [comment, setComment] = useState<HackerNewsItem>()

  useEffect(() => {
    getItemById(id)
      .then(comment => {
        console.log(comment)
        setComment(comment);
      })
  }, [id])

  return (
    <Card style={{ width: '27rem' }}>
      <Card.Header>
        <Card.Title>{comment?.by}</Card.Title>
      </Card.Header>
      <Card.Body>
        <div dangerouslySetInnerHTML={{ __html: String(comment && comment.text ? comment.text : '') }}></div>
      </Card.Body>
      <Card.Footer>
        {comment && comment.kids ? comment.kids.map(id => <Comment key={id} id={id} />) : ''}
      </Card.Footer>
    </Card>
  )
}

export default Comment;