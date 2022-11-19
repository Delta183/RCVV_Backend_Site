import axios from 'axios';

// This file is connected to src/actions/articles.js
const url = 'http://localhost:5000/newsletters';

export const fetchNewsletters = () => axios.get(url);
// newArticle in this case is simply a parameter
export const createNewsletter = (newNewsletter) => axios.post(url, newNewsletter);
export const updateNewsletter = (id, updatedNewsletter) => axios.patch(`${url}/${id}`, updatedNewsletter);
export const deleteNewsletter = (id) => axios.delete(`${url}/${id}`);