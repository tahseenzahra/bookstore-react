import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addbook } from '../redux/books/books';

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
    // dispatch(
    //   addbook({
    //     id: uuidv4(),
    //     title,
    //     author,
    //   }),
    // );
    // setTitle('');
    // setAuthor('');
  };

  // const titleHandler = (e) => {
  // setTitle(e.target.value);
  const inputHandler = (e) => {
    const {
      name, value, type, checked,
    } = e.target;
    setBookData((prevBookData) => ({
      ...prevBookData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // const authorHandler = (e) => {
  //   setAuthor(e.target.value);
  // };
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={formHandler}>
        {/* <input placeholder="Book Title" value={title} onChange={titleHandler} required /> */}
        <input
          type="text"
          placeholder="Book title"
          value={bookData.title}
          name="title"
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Book author"
          value={bookData.author}
          name="author"
          onChange={inputHandler}
        />
        {/* <input placeholder="Author" value={author} onChange={authorHandler} required /> */}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Addbook;
