import { combineReducers } from 'redux';

import articles from './articles.js';
import newsletters from './newsletters.js';

// Put all reducers here
export const reducers = combineReducers({ articles, newsletters });