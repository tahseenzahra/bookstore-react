import React from 'react';
import Book from './Book';

function Bookcard() {
  const data = [
    {
      title: 'Atomic Habits',
      author: 'James Clear',
    },
  ];
  return (
    <div>
      {data.map((book) => (
        <Book key={0} title={book.title} author={book.author} />
      ))}
      <ul>
        <li>Comments</li>
        <li>Remove</li>
        <li>Edit</li>
      </ul>
    </div>
  );
}

export default Bookcard;
