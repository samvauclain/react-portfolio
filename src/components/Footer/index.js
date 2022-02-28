import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Footer() {
    return (      
        <Row className="bg-dark text-light text-center py-3 mt-3">
            <Col>
            <span className="material-icons xl-icon color-4">favorite</span>
            <h5>Thanks or Visiting!</h5>
            <p>Keep In Touch:</p>
            <span className="fa-icons">
                <a href="mailto:samvauclain@gmail.com">
                    <i className="fas fa-envelope fa-icon"></i>
                </a>
                <a href="https://github.com/samvauclain" target="_blank" rel="noreferrer">
                    <i className="fab fa-github fa-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/sam-place-0ba3ba17/" target="_blank" rel="noreferrer"> 
                    <i className="fab fa-linkedin fa-icon"></i>
                </a>
            </span>
            </Col>
        </Row>
    )
}

export default Footer;