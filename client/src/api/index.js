import axios from 'axios';

// This file is connected to src/actions/articles.js
const url = 'http://localhost:5000/articles';

export const fetchArticles = () => axios.get(url);
// newArticle in this case is simply a parameter
export const createArticle = (newArticle) => axios.post(url, newArticle);
// export const updateArticle = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deleteArticle = (id) => axios.delete(`${url}/${id}`);