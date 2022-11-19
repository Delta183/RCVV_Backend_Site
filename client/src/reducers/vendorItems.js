/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// 
export default (vendorItems = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...vendorItems, action.payload];
    case UPDATE:
      return vendorItems.map((vendorItem) => (vendorItem._id === action.payload._id ? action.payload : vendorItem));
    case DELETE:
      return vendorItems.filter((vendorItem) => vendorItem._id !== action.payload);
    default:
      return vendorItems;
  }
};