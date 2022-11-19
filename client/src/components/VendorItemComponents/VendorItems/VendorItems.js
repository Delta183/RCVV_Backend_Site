import React from "react";
import VendorItem from "./VendorItem/VendorItem.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';

const VendorItems = ({setCurrentId}) => {
    const vendorItems = useSelector((state) => state.vendorItems);
    // console.log(articles);
    
    return (
      // Ternary statement: Spinner if empty, articles if not
      !vendorItems.length ? <Spinner animation="border" /> : (
        <Container>
          <Row>
            {/* With the fetched articles, create an Article component for each of them */}
            {vendorItems.map((vendorItem) => (
              <Col className="mb-3" key={vendorItem._id} item="true" xs={12} sm={6} md={6}>
                <VendorItem vendorItem={vendorItem} setCurrentId={setCurrentId} />
              </Col>
            ))}
          </Row>
        </Container>
      )
    );
}

export default VendorItems;
