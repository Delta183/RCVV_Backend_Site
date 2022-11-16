import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createArticle, updateArticle } from '../../../actions/articles';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FileBase from 'react-file-base64';

const ArticleForm = ({ currentId, setCurrentId }) => {
// State with setter and getter implicitly with attributes
const [articleData, setArticleData] = useState({ creator: '', title: '', content: '', selectedFile: '' });
// Runs a check if the selected article matches ids
const article = useSelector((state) => (currentId ? state.articles.find((p) => p._id === currentId) : null));
const dispatch = useDispatch();

// Populate values of the form
useEffect(() => {
  if (article) setArticleData(article);
}, [article])

// Buttons functionality 
// Dispatching the action of createArticle upon submit
const handleSubmit = (e) => {
  e.preventDefault();
  if (currentId === 0) {
    dispatch(createArticle(articleData));
    clear();
  } else {
    dispatch(updateArticle(currentId, articleData));
    clear();
  }
}

const clear = () => {
  setCurrentId(0);
  setArticleData({ title: '', creator: '', content: '', selectedFile: '' });
};

// HTML Below
return (
  <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
    {/* First segment of the form (i.e. title, text input, extra text
      mb refers to the level of the 'b' bottom margin. me is for the 'e' end margin  */}
    <Form.Group className="m-3" name="title">
      <Form.Label>Title</Form.Label>
      <Form.Control 
      type="text" 
      placeholder="Enter a title for the article..." 
      value={articleData.title} 
      // This is a setter method, the ...articleData in this case is necessary to ensure subsequent textfields don't override title
      onChange={(e) => setArticleData({...articleData, title: e.target.value})}/>
    </Form.Group>

    {/* Second Segment */}
    <Form.Group className="m-3" name="creator">
      <Form.Label>Creator</Form.Label>
      <Form.Control 
      type="text" 
      placeholder="Enter the name of the creator..." 
      value={articleData.creator}
      onChange={(e) => setArticleData({...articleData, creator: e.target.value})}
      />
    </Form.Group>

    {/* Third Segment */}
    <Form.Group className="m-3" name="content">
      <Form.Label>Content</Form.Label>
      <Form.Control as="textarea" rows={10} 
      type="text" 
      placeholder="Enter the content for the article..." 
      value={articleData.content}
      onChange={(e) => setArticleData({...articleData, content: e.target.value})}
      />
    </Form.Group>
   

    {/* Fourth Segment */}
    <Form.Group className="m-3" name="selectedFile">
      <Form.Label>Image</Form.Label>
      <div>
        <FileBase 
        type="file" 
        multiple={false}
        onDone={({ base64 }) => setArticleData({ ...articleData, selectedFile: base64 })}
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
  
export default ArticleForm;