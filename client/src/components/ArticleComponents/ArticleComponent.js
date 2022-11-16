import React from 'react';
import ArticleForm from './Form/ArticleForm.js';
import Articles from './Articles/Articles.js';

const ArticleComponent = () => {
    
return (
      <div>
        <h1 style={{color:"green"}}> 
            Article Component</h1>
        <ArticleForm/>
        <Articles/>
      </div>
  )
};
  
export default ArticleComponent;