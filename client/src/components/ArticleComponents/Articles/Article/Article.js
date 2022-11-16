import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Article = () => {
    return (
        // The card subheaders may need ids
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Subtitle>Author</Card.Subtitle>
            <Card.Text>
                This is a description for the articles once done.
            </Card.Text>
            <Button className="me-2" variant="primary">Edit</Button>
            <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card> 
    );
}

export default Article;