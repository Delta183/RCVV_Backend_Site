import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ArticleForm from './Form/ArticleForm.js';
import Articles from './Articles/Articles.js';
import { getArticles } from '../../actions/articles.js';

const ArticleComponent = () => {
  // useState to create an attribute with get and set functionality
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

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