import React from "react";
import Article from "./Article/Article.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';

const Articles = ({setCurrentId}) => {
    const articles = useSelector((state) => state.articles);
    // console.log(articles);
    
    return (
      // Ternary statement: Spinner if empty, articles if not
      !articles.length ? <Spinner animation="border" /> : (
        <Container>
          <Row>
            {/* With the fetched articles, create an Article component for each of them */}
            {articles.map((article) => (
              <Col className="mb-3" key={article._id} item="true" xs={12} sm={6} md={6}>
                <Article article={article} setCurrentId={setCurrentId} />
              </Col>
            ))}
          </Row>
        </Container>
      )
    );
}

export default Articles;
