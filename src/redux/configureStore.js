import { configureStore } from '@reduxjs/toolkit';
import bookreducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookreducer,
    categories: categoriesReducer,
  },

});

export default store;
