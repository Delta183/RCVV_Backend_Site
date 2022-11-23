import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// The actions folder is connext to the api folder
import * as api from '../api/index.js';

export const getItems = () => async (dispatch) => {
  try {
    const { data } = await api.fetchItems();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createItem = (vendorItem) => async (dispatch) => {
  try {
    const { data } = await api.createItem(vendorItem);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateItem = (id, vendorItem) => async (dispatch) => {
  try {
    const { data } = await api.updateItem(id, vendorItem);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteItem = (id) => async (dispatch) => {
  try {
    await api.deleteItem(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
