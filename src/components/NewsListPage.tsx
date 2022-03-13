import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getTopNewsIds } from '../api/HackerNewsApi';
import NewsList from './NewsList';

const NewsListPage = () => {
  const [newsIds, setNewsIds] = useState<number[]>([]);

  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [hasNext, setHasNext] = useState<boolean>(true);

  const [error, setError] = useState<string>('');

  useEffect(() => {
    getTopNewsIds()
      .then(((data: number[]) => {
        setHasNext(Boolean(data[skip + take + 1]));
        setNewsIds(data.slice(skip, skip + take));
      }))
      .catch((error) => {
        setError(error);
      })
  }, [skip, take])

  const handleNext = () => {
    const assumedNextValue = skip + take;
    setSkip(hasNext ? assumedNextValue : skip);
  }

  const handlePrevious = () => {
    const assumedPreviousValue = skip - take;
    const minAvailable = 0;
    setSkip(assumedPreviousValue < minAvailable ? minAvailable : assumedPreviousValue);
  }

  return (
    <>
      <NewsList newsIds={newsIds}/>
      <div>
        <button onClick={handlePrevious}>previous</button>
        <button onClick={handleNext}>next</button>
      </div>
    </>
  )
}

export default NewsListPage;