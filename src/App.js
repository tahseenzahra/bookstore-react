import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Addbook from './components/Addbook';
import Navbar from './components/Navbar';
import Bookcard from './components/Bookcard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Bookcard" element={<Bookcard />} />
        <Route exact path="/Addbook" element={<Addbook />} />
      </Routes>
    </>
  );
}

export default App;
