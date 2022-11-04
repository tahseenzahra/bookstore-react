import React from 'react';

function Addbook() {
  return (
    <div>
      <h2>Add New Book</h2>
      <form>
        <input placeholder="Book Title" required />
        <input placeholder="Author" required />
        <button type="button">Add Book</button>
      </form>
    </div>
  );
}

export default Addbook;
