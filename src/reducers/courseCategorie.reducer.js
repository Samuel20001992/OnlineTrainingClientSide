import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (courseCategories = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log(action.payload);
      return  action.payload;
    case LIKE:
      return courseCategories.map((courseCategorie) => (courseCategorie._id === action.payload._id ? action.payload : courseCategorie));
    case CREATE:
      return [...courseCategories, action.payload];
    case UPDATE:
      return courseCategories.map((courseCategorie) => (courseCategorie._id === action.payload._id ? action.payload : courseCategorie));
    case DELETE:
      return courseCategories.filter((courseCategorie) => courseCategorie._id !== action.payload);
    default:
      return courseCategories;
  }
};

