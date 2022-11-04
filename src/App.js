import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route exact path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
