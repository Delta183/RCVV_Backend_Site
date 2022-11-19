import React from "react";
import Newsletter from "./Newsletter/Newsletter.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';

const Newsletters = ({setCurrentId}) => {
    const newsletters = useSelector((state) => state.newsletters);
    // console.log(newsletters);
    return (
      // Ternary statement: Spinner if empty, newsletters if not
      !newsletters.length ? <Spinner animation="border" /> : (
        <Container>
          <Row>
            {/* With the fetched newsletters, create an Newsletter component for each of them */}
            {newsletters.map((newsletter) => (
              <Col className="mb-3" key={newsletter._id} item="true" xs={12} sm={6} md={6}>
                <Newsletter newsletter={newsletter} setCurrentId={setCurrentId} />
              </Col>
            ))}
          </Row>
        </Container>
      )
    );
}

export default Newsletters;
