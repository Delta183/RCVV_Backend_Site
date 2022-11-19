import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import NewsletterForm from './Form/NewsletterForm.js';
import Newsletters from './Newsletters/Newsletters.js';
import { getNewsletters } from '../../actions/newsletters.js';

const NewsletterComponent = () => {
  // useState to create an attribute with get and set functionality
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  // tell React that your component needs to do something after render. React will remember the function you passed 
  // (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
  useEffect(() => {
    dispatch(getNewsletters());
  }, [currentId, dispatch]);

  return (
        <div>
          <h1 style={{color:"green"}}> 
              Newsletter Component</h1>
              {/* Be sure to send the props through. Props are effectively attributes that pass to children */}
              <NewsletterForm currentId={currentId} setCurrentId={setCurrentId} />
              <Newsletters setCurrentId={setCurrentId} />
        </div>
  )
};
  
export default NewsletterComponent;