import React from 'react';
import BookCSS from '../css-modules/Book.module.css';

function Book(prop) {
  const { title, author } = prop;
  return (
    <div>
      <ul className={BookCSS.bookInfo}>
        <li>{title}</li>
        <li>{author}</li>
      </ul>
      <button type="button">Delete</button>
    </div>
  );
}

export default Book;
