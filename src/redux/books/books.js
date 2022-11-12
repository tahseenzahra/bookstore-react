const AddBook = 'bookstore/books/addbook';
const RemoveBook = 'bookstore/books/removebook';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case AddBook:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case RemoveBook:
      return [
        ...state
          .filter((book) => (book.id !== book)),
      ];
    default:
      return state;
  }
};

export const addbook = (id, title, author) => ({
  type: AddBook,
  id,
  title,
  author,
});

export const removebook = (id) => ({
  type: RemoveBook,
  id,
});

export default bookReducer;
