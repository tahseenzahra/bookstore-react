import React from 'react';
import Book from './Book';
import Addbook from './Addbook';

function Booklist() {
  return (
    <section>
      <div>
        <Book />
      </div>
      <div>
        <Addbook />
      </div>
    </section>
  );
}

export default Booklist;
