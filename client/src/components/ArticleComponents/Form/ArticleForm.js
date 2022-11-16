import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FileBase from 'react-file-base64';

const ArticleForm = () => {
    
return (
  <Form>
    {/* First segment of the form (i.e. title, text input, extra text
      mb refers to the level of the 'b' bottom margin. me is for the 'e' end margin  */}
    <Form.Group className="m-3" name="title">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter a title for the article..." />
      {/* Extra text for a helpful instruction.
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form.Group>

    {/* Second Segment */}
    <Form.Group className="m-3" name="creator">
      <Form.Label>Creator</Form.Label>
      <Form.Control type="text" placeholder="Enter the name of the creator..." />
    </Form.Group>

    {/* Third Segment */}
    <Form.Group className="m-3" name="content">
      <Form.Label>Content</Form.Label>
      <Form.Control as="textarea" rows={10} type="text" placeholder="Enter the content for the article..." />
    </Form.Group>
    {/* Checkbox functionality.
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}

    {/* Fourth Segment */}
    <Form.Group className="m-3" name="selectedFile">
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