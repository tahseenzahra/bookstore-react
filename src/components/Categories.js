import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const checkHandler = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <p>{status}</p>
      <button type="button"onClick={checkHandler}>Check status</button>
    </div>
  );
}
