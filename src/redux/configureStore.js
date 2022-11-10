import { configureStore, combineReducers } from 'redux';
import bookreducer from './books/books';
import categoriesreducer from './categories/categories';

const reducers = combineReducers({
  book: bookreducer,
  categories: categoriesreducer,
});

const store = configureStore(reducers);

export default store;