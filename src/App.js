import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBook } from './redux/books/books';
import Booklist from './components/Booklist';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import './css-modules/App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route exact path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
export default App;
