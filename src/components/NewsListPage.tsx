import React, { useEffect, useState } from 'react';
import { Button, Card, Pagination, Stack } from 'react-bootstrap';
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
      <div style={{display: "flex", justifyContent: "center", margin: "10px"}}>
        <Pagination size="lg">
          <Pagination.Item onClick={handlePrevious}>Previous</Pagination.Item>
          <Pagination.Item onClick={handleNext}>Next</Pagination.Item>
        </Pagination>
      </div>
      <NewsList newsIds={newsIds}/>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Pagination size="lg">
          <Pagination.Item onClick={handlePrevious}>Previous</Pagination.Item>
          <Pagination.Item onClick={handleNext}>Next</Pagination.Item>
        </Pagination>
      </div>
    </>
  )
}

export default NewsListPage;