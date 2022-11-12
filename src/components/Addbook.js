import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addbook } from '../redux/books/books';

function Addbook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(
      addbook({
        id: uuidv4(),
        title,
        author,
      }),
    );
    setTitle('');
    setAuthor('');
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={formHandler}>
        <input placeholder="Book Title" value={title} onChange={titleHandler} required />
        <input placeholder="Author" value={author} onChange={authorHandler} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Addbook;
