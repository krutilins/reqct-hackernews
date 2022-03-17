import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../api/HackerNewsApi';
import Comment from './Comment';

const DiscussionPage = () => {
  const [commentsIds, setCommentsIds] = useState<number[]>([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getItemById(Number(params.id))
        .then(data => {
          setCommentsIds(data.kids || [])
        })
    }
  }, [params]);

  return (
    <div style={{width: "70%", margin: "0 auto"}}>
      {commentsIds.map(id => <Comment key={id} id={id} />)}
    </div>
  )
}

export default DiscussionPage;