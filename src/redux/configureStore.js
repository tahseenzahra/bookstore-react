import { configureStore } from '@reduxjs/toolkit';
import bookreducer from './books/books';
import categoriesReducer from './categories/categories';

// const root = combineReducers({
//   bookreducer,
//   categoriesReducer,
const store = configureStore({
  reducer: {
    books: bookreducer,
    categories: categoriesReducer,
  },

});

// const store = configureStore({ reducer: root });

export default store;
