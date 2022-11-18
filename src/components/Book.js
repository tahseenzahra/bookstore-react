import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removebook } from '../redux/books/books';
import BookCSS from '../css-modules/Book.module.css';

export default function Book() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(removebook(id));
  };
  return (
    <>
      {books.map((book) => (
        <div className={BookCSS.bookinfo} key={book.id}>
          <p>{book.category}</p>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <button type="button" onClick={() => deleteHandler(book.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
