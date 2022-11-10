const AddBook = 'bookstore/books/addbook';
const RemoveBook = 'bookstore/books/removebook';

const initialState = {
  books: []
};

export function addbook(book) {
  return {
    type: AddBook,
    payload: book
  };
}
export function removebook(id) {
  return {
    type: RemoveBook,
    payload: id
  };
}

export default function bookreducer(state = initialState, action = {}) {
  switch (action.type) {
    
    case AddBook:
      return state.concat(action.payload);
    case RemoveBook: 
      return {
        ...state,
        payload: state.filter((book) => book.id !== action.payload),}
    default:
      return state;
  }
};
