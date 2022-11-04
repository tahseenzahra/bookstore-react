import React from 'react';
import Book from './Book';

function Bookcard() {
  return (
    <div>
      <Book />
      <ul>
        <li>Comments</li>
        <li>Remove</li>
        <li>Edit</li>
      </ul>
    </div>
  );
}

export default Bookcard;
