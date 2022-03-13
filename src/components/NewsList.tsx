import React, { useEffect, useState } from 'react';
import { getNewsByIds } from '../api/HackerNewsApi';
import { HackerNewsItem } from '../types/item';
import NewsItem from './NewsItem';

const NewsList = ({ newsIds }: { newsIds: number[] }) => {
  const [newsList, setNewsList] = useState<HackerNewsItem[]>([]);

  useEffect(() => {
    getNewsByIds(newsIds).then(newsList => {
      setNewsList([...newsList]);
    })
  }, [newsIds])

  return (
    <>
      {newsList.map(newsItemProps => <NewsItem key={newsItemProps.id} {...newsItemProps} />)}
    </>
  );
}

export default NewsList;