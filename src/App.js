/*eslint-disable*/
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Booklist from './components/Booklist';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Booklist />} />
            <Route exact path="/Categories" element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
