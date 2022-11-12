import { createStore, combineReducers } from 'react-redux';
import bookreducer from './books/books';
import categoriesreducer from './categories/categories';

const configureStore = () => combineReducers({
  bookreducer,
  categoriesreducer,
});

const store = createStore(configureStore);

export default store;
