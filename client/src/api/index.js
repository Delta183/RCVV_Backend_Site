import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchArticles = () => axios.get('/articles');
// newArticle in this case is simply a parameter
export const createArticle = (newArticle) => axios.post('/articles', newArticle);
export const updateArticle = (id, updatedArticle) => axios.patch(`/articles/${id}`, updatedArticle);
export const deleteArticle = (id) => axios.delete(`/articles/${id}`);

export const fetchNewsletters = () => axios.get('/newsletters');
// newArticle in this case is simply a parameter
export const createNewsletter = (newNewsletter) => axios.post('/newsletters', newNewsletter);
export const updateNewsletter = (id, updatedNewsletter) => axios.patch(`/newsletters/${id}`, updatedNewsletter);
export const deleteNewsletter = (id) => axios.delete(`/newsletters/${id}`);

export const fetchItems = () => axios.get('/vendor');
// newArticle in this case is simply a parameter
export const createItem = (newVendorItem) => axios.post('/vendor', newVendorItem);
export const updateItem = (id, updatedVendorItem) => axios.patch(`/vendor/${id}`, updatedVendorItem);
export const deleteItem = (id) => axios.delete(`/vendor/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);