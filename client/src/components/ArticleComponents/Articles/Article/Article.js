import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { useDispatch } from 'react-redux';

const Article = ({ article, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        // The card subheaders may need ids
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={article.selectedFile} /> 
            <Card.Body>
                {/* Using the article passed down via the parameters, use them to populate the card */}
                <Card.Title>{article.title}</Card.Title>
                <Card.Subtitle>{article.creator}</Card.Subtitle>
                <Card.Text>{article.content}</Card.Text>
                <Card.Text>{moment(article.createdAt).fromNow()}</Card.Text>
                <Button className="me-2" variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card> 
    );
}

export default Article;