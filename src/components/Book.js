import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removebook } from '../redux/books/books';
import BookCSS from '../css-modules/Book.module.css';

const Book = () => {
  const books = useSelector((state) => state.bookreducer);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(removebook(id));
  };
  return (
    <div className={BookCSS.bookinfo}>
      {books.map((book) => (
        <div key={book.id}>
          <p>{book.category}</p>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <button type="button" onClick={() => deleteHandler(book.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Book;
