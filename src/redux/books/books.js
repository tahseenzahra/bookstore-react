// import { v4 as uuidv4 } from 'uuid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const AddBook = 'bookstore/books/addbook';
// const RemoveBook = 'bookstore/books/removebook';

// const initialState = [
//   {
//     title: 'Atomic Habits',
//     author: 'James Clear',
//     id: uuidv4(),
//   },
//   {
//     title: 'Think and Grow Rich',
//     author: 'Nepolean Hill',
//     id: uuidv4(),
//   },
// ];

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/r7k1xDRDaSi4D5ImRVRb/books/';

const initialState = {
  books: [],
};

export const getBook = createAsyncThunk('books/getbook', async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const books = [
    Object.keys(data).map((key) => ({
      id: key,
      ...data[key][0],
    })),
  ];
  return books;
});
export const addbook = createAsyncThunk('books/addbook', async (payload, thunkAPI) => {
  await fetch(`${apiUrl}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: payload.id,
      title: payload.title,
      author: payload.author,
      category: payload.category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => thunkAPI.dispatch(getBook()));
  const { books } = thunkAPI.getState().books;
  return books;
});

// export function removebook(id) {
//   return {
//     type: RemoveBook,
//     payload: id,
//   };
// }
export const removebook = createAsyncThunk('books/removebook', async (payload, thunkAPI) => {
  await fetch(`${apiUrl}${payload}`, {
    method: 'DELETE',
  }).then(() => thunkAPI.dispatch(getBook()));
  const { books } = thunkAPI.getState().books;
  return books;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: {
    [getBook.fulfilled]: (state, action) => {
      const updatedState = state;
      const newStore = action.payload[0];
      updatedState.books = newStore;
    },
    [addbook.fulfilled]: (state, action) => {
      const updatedState = state;
      updatedState.books = action.payload;
    },
    [removebook.fulfilled]: (state, action) => {
      const updatedState = state;
      updatedState.books = action.payload;
    },
  },
});

export default bookSlice.reducer;
