import * as actionType from '../constants/actionTypes.js';

// There are only 2 real states, log in and log out
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      // Set the current profil in local storage so it will be remembered even if the window is closed
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;