import React from 'react';

function Addbook() {
  return (
    <div>
      <h2>Add New Book</h2>
      <input textarea="Book Title" required />
      <input textarea="Author" required />
      <button>Add Book</button>
    </div>
  );
}

export default Addbook;
