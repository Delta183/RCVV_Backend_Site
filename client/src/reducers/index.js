import { combineReducers } from 'redux';

import articles from './articles.js';
import newsletters from './newsletters.js';
import vendorItems from './vendorItems.js';
import authReducer from './auth.js';
// Put all reducers here
export const reducers = combineReducers({ articles, newsletters, vendorItems, authReducer});