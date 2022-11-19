/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// 
export default (newsletters = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...newsletters, action.payload];
    case UPDATE:
      return newsletters.map((newsletter) => (newsletter._id === action.payload._id ? action.payload : newsletter));
    case DELETE:
      return newsletters.filter((newsletter) => newsletter._id !== action.payload);
    default:
      return newsletters;
  }
};