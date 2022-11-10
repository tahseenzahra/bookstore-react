const Status = 'bookstore/categories/status';

const initialState = {
  categories: []
};

export function checkStatus() {
  return {
    type: Status,
  };
}

export default function categoriesreducer(state = initialState, action = {}) {
  switch (action.type) {
    
    case Status:
      return "Under construction";
    default:
      return state; 
  }
};
