import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteArticle } from "../../../../actions/articles";

const Article = ({ article, setCurrentId }) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        // The card subheaders may need ids
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={article.selectedFile} /> 
            <Card.Body>
                {/* Using the article passed down via the parameters, use them to populate the card */}
                <Card.Title>{article.title}</Card.Title>
                <Card.Subtitle>{article.creator}</Card.Subtitle>
                <Card.Text>{article.content}</Card.Text>
                {/* Moment is used to track the time, a library for time */}
                <Card.Text>{moment(article.createdAt).fromNow()}</Card.Text>
                {/* By setting the currentId here, the props go back up and trigger the updateFunction */}
                {user?.result?.name && 
                    <div>
                         <Button className="me-2" variant="primary" onClick={() => setCurrentId(article._id)}>Edit</Button>
                        {/* dispatch the action to deleteArticle */}
                        <Button variant="danger" onClick={() => dispatch(deleteArticle(article._id))}>Delete</Button>
                    </div>}
            </Card.Body>
        </Card> 
    );
};

export default Article;