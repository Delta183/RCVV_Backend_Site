import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ArticleForm from './Form/ArticleForm.js';
import Articles from './Articles/Articles.js';
import { getArticles } from '../../actions/articles.js';

const ArticleComponent = () => {
  // useState to create an attribute with get and set functionality
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  // tell React that your component needs to do something after render. React will remember the function you passed 
  // (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
  useEffect(() => {
    dispatch(getArticles());
  }, [currentId, dispatch]);

  return (
        <div>
          <h1 style={{color:"green"}}> 
              Article Component</h1>
              {/* Be sure to send the props through. Props are effectively attributes that pass to children */}
              <ArticleForm currentId={currentId} setCurrentId={setCurrentId} />
              <Articles setCurrentId={setCurrentId} />
        </div>
  )
};
  
export default ArticleComponent;