import { createSlice } from '@reduxjs/toolkit';

// const Status = 'bookstore/categories/status';

// const categoriesReducer = (state = [], action) => {
//   switch (action.type) {
//     case Status:
//       return [
//         ...state,
//         {
//           text: action.text,
//         },
//       ];
//     default:
//       return state;
//   }
// };
const initialState = [];
const options = {
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => ('Under Construction'),
  },
};
const categoriesReducer = createSlice(options);

// export const checkStatus = () => ({
//   type: Status,
//   text: 'Under construction',
// });

// export default categoriesReducer;
export const { checkStatus } = categoriesReducer.actions;
export default categoriesReducer.reducer;
