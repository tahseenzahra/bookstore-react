/*eslint-disable*/
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Books />} />
              <Route exact path="/Categories" element={<Categories />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
export default App;
