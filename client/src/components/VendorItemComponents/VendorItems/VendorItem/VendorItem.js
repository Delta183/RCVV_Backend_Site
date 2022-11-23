import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteItem } from "../../../../actions/vendorItems.js";

const VendorItem = ({ vendorItem, setCurrentId }) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        // The card subheaders may need ids
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={vendorItem.selectedFile} /> 
            <Card.Body>
                {/* Using the article passed down via the parameters, use them to populate the card */}
                <Card.Title>{vendorItem.title}</Card.Title>
                <Card.Subtitle>{vendorItem.price}</Card.Subtitle>
                <Card.Text>{vendorItem.description}</Card.Text>
                <Card.Text>Amount: {vendorItem.amount}</Card.Text>
                {/* By setting the currentId here, the props go back up and trigger the updateFunction */}
                {user?.result?.name && 
                    <div>
                        <Button className="me-2" variant="primary" onClick={() => setCurrentId(vendorItem._id)}>Edit</Button>
                        {/* dispatch the action to deleteArticle */}
                        <Button variant="danger" onClick={() => dispatch(deleteItem(vendorItem._id))}>Delete</Button>
                    </div>
                    }
               
            </Card.Body>
        </Card> 
    );
};

export default VendorItem;