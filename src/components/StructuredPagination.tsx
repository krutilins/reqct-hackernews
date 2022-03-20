import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSkip } from '../features/pagination/paginationSlice';
import { RootState } from '../store';

function StructuredPagination() {
  const skip = useSelector<RootState, number>((state) => state.pagination.skip);
  const take = useSelector<RootState, number>((state) => state.pagination.take);
  const hasNext = useSelector<RootState, boolean>((state) => state.pagination.hasNext);

  const dispatch = useDispatch();

  const handleNext = () => {
    const assumedNextValue = skip + take;
    dispatch(setSkip(hasNext ? assumedNextValue : skip));
  };

  const handlePrevious = () => {
    const assumedPreviousValue = skip - take;
    const minAvailable = 0;
    dispatch(setSkip(assumedPreviousValue < minAvailable ? minAvailable : assumedPreviousValue));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
      <Pagination size="lg">
        <Pagination.Item onClick={handlePrevious}>Previous</Pagination.Item>
        <Pagination.Item onClick={handleNext}>Next</Pagination.Item>
      </Pagination>
    </div>
  );
}

export default StructuredPagination;
