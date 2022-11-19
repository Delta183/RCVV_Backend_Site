import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import VendorItemForm from './Form/VendorItemForm.js';
import VendorItems from './VendorItems/VendorItems.js';
import { getItems } from '../../actions/vendorItems.js'

const VendorItemComponent = () => {
  // useState to create an attribute with get and set functionality
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  // tell React that your component needs to do something after render. React will remember the function you passed 
  // (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
  useEffect(() => {
    dispatch(getItems());
  }, [currentId, dispatch]);

  return (
        <div>
          <h1 style={{color:"green"}}> 
              Vendor Items Component</h1>
              {/* Be sure to send the props through. Props are effectively attributes that pass to children */}
              <VendorItemForm currentId={currentId} setCurrentId={setCurrentId} />
              <VendorItems setCurrentId={setCurrentId} />
        </div>
  )
};
  
export default VendorItemComponent;