import axios from 'axios';

const url = 'http://localhost:5000/articles';

export const fetchArticles = () => axios.get(url);
// export const createArticle = (newPost) => axios.post(url, newPost);
// export const likeArticle = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updateArticle = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deleteArticle = (id) => axios.delete(`${url}/${id}`);