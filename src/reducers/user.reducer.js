import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log(action.payload);
      return  action.payload;
    case LIKE:
      return users.map((user) => (user._id === action.payload._id ? action.payload : user));
    case CREATE:
      return [...users, action.payload];
    case UPDATE:
      return users.map((user) => (user._id === action.payload._id ? action.payload : user));
    case DELETE:
      return users.filter((user) => user._id !== action.payload);
    default:
      return users;
  }
};

