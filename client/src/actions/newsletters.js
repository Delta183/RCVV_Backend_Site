import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// The actions folder is connext to the api folder
import * as api from '../api/newsletters.js';

export const getNewsletters = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNewsletters();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createNewsletter = (newsletter) => async (dispatch) => {
  try {
    const { data } = await api.createNewsletter(newsletter);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateNewsletter = (id, newsletter) => async (dispatch) => {
  try {
    const { data } = await api.updateNewsletter(id, newsletter);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteNewsletter = (id) => async (dispatch) => {
  try {
    await api.deleteNewsletter(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
