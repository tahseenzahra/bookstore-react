const Status = 'bookstore/categories/status';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case Status:
      return [
        ...state,
        {
          text: action.text,
        },
      ];
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: Status,
  text: 'Under construction',
});

export default categoriesReducer;
