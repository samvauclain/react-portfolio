import React from 'react';
import FeaturedProjectObjects from '../FeaturedProjectObjects';
import ProjectObjects from '../ProjectObjects';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import featuredImage from "../../assets/walk-n-spot.png";


function Portfolio(props) {
    return (
      <Container>

        <Row className="justify-content-md-center align-items-center my-3 py-3">
            <Col className="my-3 col-12 col-md-8 col-lg-6">
                <img src = {featuredImage} alt="Featured Project" className='w-100 offsest-box-color-2'/>
            </Col>
          <FeaturedProjectObjects></FeaturedProjectObjects>
        </Row>
          
          
          <ProjectObjects></ProjectObjects>
      </Container>
    )
}

export default Portfolio;