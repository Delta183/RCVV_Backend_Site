import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createItem, updateItem } from '../../../actions/vendorItems.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FileBase from 'react-file-base64';

const VendorItemForm = ({ currentId, setCurrentId }) => {
  // State with setter and getter implicitly with attributes
  const [vendorItem, setVendorItem] = useState({ title: '', price: '', description: '', selectedFile: '', amount: 0 });
  // Runs a check if the selected article matches ids
  const item = useSelector((state) => (currentId ? state.vendorItems.find((p) => p._id === currentId) : null));
  const dispatch = useDispatch();

// Populate values of the form
useEffect(() => {
  if (item) setVendorItem(item);
}, [item])

// Buttons functionality 
// Dispatching the action of createArticle upon submit
const handleSubmit = (e) => {
  e.preventDefault();
  if (currentId === 0) {
    dispatch(createItem(vendorItem));
    clear();
  } else {
    dispatch(updateItem(currentId, vendorItem));
    clear();
  }
}

const clear = () => {
  setCurrentId(0);
  // Be sure to set the attributes as none once more
  setVendorItem({ title: '', price: '', description: '', selectedFile: '', amount: 0});
};

// HTML Below
return (
  <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
    <h2>{currentId ? `Editing "${item.title}"` : 'Creating an Vendor Item'}</h2>
    {/* First segment of the form (i.e. title, text input, extra text
      mb refers to the level of the 'b' bottom margin. me is for the 'e' end margin  */}
    <Form.Group className="m-3" name="title">
      <Form.Label>Title</Form.Label>
      <Form.Control 
      type="text" 
      placeholder="Enter a title for the item..." 
      value={vendorItem.title} 
      // This is a setter method, the ...vendorItem in this case is necessary to ensure subsequent textfields don't override title
      onChange={(e) => setVendorItem({...vendorItem, title: e.target.value})}/>
    </Form.Group>

    {/* Second Segment */}
    <Form.Group className="m-3" name="price">
      <Form.Label>Price</Form.Label>
      <Form.Control 
      type="text" 
      placeholder="Enter the price of the item..." 
      value={vendorItem.price}
      onChange={(e) => setVendorItem({...vendorItem, price: e.target.value})}
      />
    </Form.Group>

    {/* Third Segment */}
    <Form.Group className="m-3" name="description">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={10} 
      type="text" 
      placeholder="Enter the description for the item..." 
      value={vendorItem.description}
      onChange={(e) => setVendorItem({...vendorItem, description: e.target.value})}
      />
    </Form.Group>

    {/* Fourth Segment */}
    <Form.Group className="m-3" name="amount">
      <Form.Label>Amount</Form.Label>
      <Form.Control
      type="number" 
      placeholder="Enter the amount for the item..." 
      value={vendorItem.amount}
      onChange={(e) => setVendorItem({...vendorItem, amount: e.target.value})}
      />
    </Form.Group>
   

    {/* Fifth Segment */}
    <Form.Group className="m-3" name="selectedFile">
      <Form.Label>Image</Form.Label>
      <div>
        <FileBase 
        type="file" 
        multiple={false}
        onDone={({ base64 }) => setVendorItem({ ...vendorItem, selectedFile: base64 })}
        />
      </div>
    </Form.Group>

    {
    /* Extra text for a helpful instruction.
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */

    /* Checkbox functionality.
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}

    {/* Submit and clear button to end all information */}
    <Button className="m-3" variant="primary" type="submit">
      Submit
    </Button>
    <Button variant="primary" onClick={clear}>
      Clear
    </Button>
  </Form>
  )
};
  
export default VendorItemForm;