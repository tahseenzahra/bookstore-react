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
    <div className="AddbookContainer">
      <h2 className="caption">Add New Book</h2>
      <form className="form" onSubmit={formHandler}>
        <input
          className="input-text"
          type="text"
          placeholder="Book title"
          value={bookData.title}
          name="title"
          required
          onChange={inputHandler}
        />
        <input
          className="input-text"
          type="text"
          placeholder="Book author"
          value={bookData.author}
          name="author"
          required
          onChange={inputHandler}
        />
        <select name="category" id="category" onChange={inputHandler}>
          <option value="">Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Comic Book">Comic Book</option>
        </select>
        <button className="Btn" type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Addbook;
