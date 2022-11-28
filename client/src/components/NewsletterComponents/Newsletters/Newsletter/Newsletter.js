import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteNewsletter } from "../../../../actions/newsletters.js";

const Newsletter = ({ newsletter, setCurrentId }) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    function onClickFunction(id){
        // Update current id
        setCurrentId(id);
        // Move screen to the top
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };
    return (
        // The card subheaders may need ids
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={newsletter.selectedFile} /> 
            <Card.Body>
                {/* Using the newsletter passed down via the parameters, use them to populate the card */}
                <Card.Title>{newsletter.title}</Card.Title>
                <Card.Subtitle>{newsletter.creator}</Card.Subtitle>
                <Card.Text>{newsletter.content}</Card.Text>
                {/* Moment is used to track the time, a library for time */}
                <Card.Text>{moment(newsletter.createdAt).fromNow()}</Card.Text>
                {user?.result?.name && 
                    <div>
                        {/* By setting the currentId here, the props go back up and trigger the updateFunction */}
                        <Button className="me-2" variant="primary" onClick={() => onClickFunction(newsletter._id)}>Edit</Button>
                        {/* dispatch the action to deleteNewsletter */}
                        <Button variant="danger" onClick={() => dispatch(deleteNewsletter(newsletter._id))}>Delete</Button>
                    </div>}
            </Card.Body>
        </Card> 
    );
};

export default Newsletter;