import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import walkNSpot from "../../assets/walk-n-spot.png";

function Portfolio() {
    return (
        <Container>
        <Row className="my-3 justify-content-md-center py-3">
            <Col className="my-3 col-12 col-md-8 col-lg-6">
                <img src = {walkNSpot} alt="hello world" className='walkNSpot w-100 offsest-box-color-1'/>
            </Col>
            <Col className="my-3 col-12 col-md-4 col-lg-6">
            <span className="material-icons xl-icon color-1">
                    devices
                </span>
                <p className="xl-txt">Featured Project:</p>
                <p className="lg-txt">WALK'N SPOT</p>
                <p>Search for a list of trails by city & types of animals seen on the trails.</p>
            </Col>
        </Row>
        </Container>
    )
}

export default Portfolio;