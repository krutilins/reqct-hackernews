import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopNewsIds } from '../api/HackerNewsApi';
import { setHasNext } from '../features/pagination/paginationSlice';
import { RootState } from '../store';
import NewsList from './NewsList';
import StructuredPagination from './StructuredPagination';

const NewsListPage = () => {
  const [newsIds, setNewsIds] = useState<number[]>([]);

  const dispatch = useDispatch()

  const skip = useSelector<RootState, number>(state => state.pagination.skip);
  const take = useSelector<RootState, number>(state => state.pagination.take);

  useEffect(() => {
    getTopNewsIds()
      .then(((data: number[]) => {
        dispatch(setHasNext(Boolean(data[skip + take + 1])));
        setNewsIds(data.slice(skip, skip + take));
      }));
  }, [skip, take])

  return (
    <>
      <StructuredPagination></StructuredPagination>
      <NewsList newsIds={newsIds}/>
      <StructuredPagination></StructuredPagination>
    </>
  )
}

export default NewsListPage;