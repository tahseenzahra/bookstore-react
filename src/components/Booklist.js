import React from 'react';
import Book from './Book';
import Addbook from './Addbook';

function Booklist() {
  return (
    <div>
      <div>
        <Book />
      </div>
      <div>
        <Addbook />
      </div>
    </div>
  );
}

export default Booklist;
