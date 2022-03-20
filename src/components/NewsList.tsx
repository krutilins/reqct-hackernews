import React, { useEffect, useState } from 'react';
import { getNewsByIds } from '../api/HackerNewsApi';
import { HackerNewsItem } from '../types/item';
import NewsItem from './NewsItem';

function NewsList({ newsIds }: { newsIds: number[] }) {
  const [newsList, setNewsList] = useState<HackerNewsItem[]>([]);

  useEffect(() => {
    getNewsByIds(newsIds).then((newsListResponse) => {
      setNewsList([...newsListResponse]);
    });
  }, [newsIds]);

  return (
    <div style={{
      minHeight: '', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between',
    }}
    >
      {newsList.map((newsItemProps) => <NewsItem key={newsItemProps.id} {...newsItemProps} />)}
    </div>
  );
}

export default NewsList;
