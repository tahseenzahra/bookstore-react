import { v4 as uuidv4 } from 'uuid';
const AddBook = 'bookstore/books/addbook';
const RemoveBook = 'bookstore/books/removebook';

const initialState = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    id: uuidv4(),
  },
  {
    title: 'Think and Grow Rich',
    author: 'Nepolean Hill',
    id: uuidv4(),
  },
];

export function addbook(book) {
  return {
    type: AddBook,
    payload: book,
  };
}
export function removebook(id) {
  return {
    type: RemoveBook,
    payload: id,
  };
}

export default function bookreducer(state = initialState, action) {
  switch (action.type) {
    case AddBook:
      return state.concat(action.payload);
    case RemoveBook:
      return {
        ...state.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
}
