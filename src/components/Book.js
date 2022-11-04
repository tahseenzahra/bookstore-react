import React from 'react';
import BookCSS from '../css-modules/Book.module.css';

function Book(props) {
  return (
    <div>
      <ul className={BookCSS.bookInfo}>
      <li>{props.book.title}</li>
      <li>{props.book.author}</li>
      </ul>
    </div>
  );
}

export default Book;
