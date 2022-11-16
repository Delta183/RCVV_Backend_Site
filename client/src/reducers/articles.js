/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (articles = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return articles.map((article) => (article._id === action.payload._id ? action.payload : article));
    case CREATE:
      return [...articles, action.payload];
    case UPDATE:
      return articles.map((article) => (article._id === action.payload._id ? action.payload : article));
    case DELETE:
      return articles.filter((article) => article._id !== action.payload);
    default:
      return articles;
  }
};