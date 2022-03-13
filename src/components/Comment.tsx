import React, { useEffect, useState } from 'react';
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
    <>
      <div>{comment?.by}</div>
      <div dangerouslySetInnerHTML={{ __html: String(comment && comment.text ? comment.text : '') }}></div>
      <div>
        {comment && comment.kids ? comment.kids.map(id => <Comment key={id} id={id} />) : ''}
      </div>
    </>
  )
}

export default Comment;