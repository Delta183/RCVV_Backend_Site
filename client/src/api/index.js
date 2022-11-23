import axios from 'axios';

// Base url for the basis of the routers for all api actions
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchArticles = () => API.get('/articles');
// newArticle in this case is simply a parameter
export const createArticle = (newArticle) => API.post('/articles', newArticle);
export const updateArticle = (id, updatedArticle) => API.patch(`/articles/${id}`, updatedArticle);
export const deleteArticle = (id) => API.delete(`/articles/${id}`);

export const fetchNewsletters = () => API.get('/newsletters');
export const createNewsletter = (newNewsletter) => API.post('/newsletters', newNewsletter);
export const updateNewsletter = (id, updatedNewsletter) => API.patch(`/newsletters/${id}`, updatedNewsletter);
export const deleteNewsletter = (id) => API.delete(`/newsletters/${id}`);

export const fetchItems = () => API.get('/vendor');
export const createItem = (newVendorItem) => API.post('/vendor', newVendorItem);
export const updateItem = (id, updatedVendorItem) => API.patch(`/vendor/${id}`, updatedVendorItem);
export const deleteItem = (id) => API.delete(`/vendor/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);