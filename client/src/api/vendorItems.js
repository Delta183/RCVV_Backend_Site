import axios from 'axios';

// This file is connected to src/actions/articles.js
const url = 'http://localhost:5000/vendor';

export const fetchItems = () => axios.get(url);
// newArticle in this case is simply a parameter
export const createItem = (newVendorItem) => axios.post(url, newVendorItem);
export const updateItem = (id, updatedVendorItem) => axios.patch(`${url}/${id}`, updatedVendorItem);
export const deleteItem = (id) => axios.delete(`${url}/${id}`);