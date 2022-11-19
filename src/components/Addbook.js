import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addbook } from '../redux/books/books';
import '../css-modules/Addbook.css';

function Addbook() {
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState({
    id: uuidv4(),
    title: '',
    author: '',
    category: '',
  });

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(addbook(bookData));
    setBookData({
      id: uuidv4(),
      title: '',
      author: '',
      category: '',
    });
  };
  const inputHandler = (e) => {
    const {
      name, value, type, checked,
    } = e.target;
    setBookData((prevBookData) => ({
      ...prevBookData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="container">
      <h2 className="caption">Add New Book</h2>
      <form className="form" onSubmit={formHandler}>
        <input
          className="input-text title"
          type="text"
          placeholder="Book title"
          value={bookData.title}
          name="title"
          required
          onChange={inputHandler}
        />
        <input
          className="input-text author"
          type="text"
          placeholder="Book author"
          value={bookData.author}
          name="author"
          required
          onChange={inputHandler}
        />
        <button className="addBtn" type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Addbook;
