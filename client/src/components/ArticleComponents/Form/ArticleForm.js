import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FileBase from 'react-file-base64';

const ArticleForm = () => {
    
return (
  <Form>
    {/* First segment of the form (i.e. title, text input, extra text
      mb refers to the level of the 'b' bottom margin. me is for the 'e' end margin  */}
    <Form.Group className="m-3" controlId="formBasicEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="email" placeholder="Enter a title for the article..." />
      {/* Extra text for a helpful instruction.
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form.Group>

    {/* Second Segment */}
    <Form.Group className="m-3" controlId="formBasicPassword">
      <Form.Label>Content</Form.Label>
      <Form.Control type="password" placeholder="Enter the content for the article..." />
    </Form.Group>
    {/* Checkbox functionality.
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}

    <Form.Group className="m-3" controlId="formBasicPassword">
      <Form.Label>Creator</Form.Label>
      <Form.Control type="password" placeholder="Enter the name of the creator..." />
    </Form.Group>

    <Form.Group className="m-3" controlId="formBasicPassword">
      <Form.Label>Image</Form.Label>
      <div>
        <FileBase type="file" multiple={false}/>
      </div>
    </Form.Group>

    {/* Submit button to end all information */}
    <Button className="m-3" variant="primary" type="submit">
      Submit
    </Button>

  </Form>
  )
};
  
export default ArticleForm;