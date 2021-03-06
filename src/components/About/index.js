import React from 'react';
import { Container, Row, Col, Card, Section } from 'react-bootstrap';
import profilePic from "../../assets/me-2-min.jpg";


function About() {
    return (      
        <Container>
        <Card>
        <Card.Body>   
        <Row>
            <Col className="col-12 col-sm-3 col-md-2 mb-2">
                <img src = {profilePic} alt="hello world" className='profilePic'/>
            </Col>
            <Col className="col-12 col-sm-9 col-md-10 mb-2">
                <h3>What I do</h3>
                <p>I have a background in web and graphic design, and have worn a lot of hats relating to those fields. Currently, I'm a web administrator. Lately I've been learning more about web development, and loving it! I've decided to pursue web development as a career change.</p>
            </Col>
        </Row>
        </Card.Body>
        </Card>

        <Row className="my-3 justify-content-md-center">
            <Col className="col-12 col-md-4 my-3">
                <Card>
                    <Card.Body>
                    <Row>
                        <Col className="col-12 col-lg-4">
                            <span class="material-icons xl-icon color-1">color_lens</span> 
                        </Col>
                        <Col className="mt-2">
                            <h3 className="mb-0">Web</h3>
                            <p>DESIGN</p>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-12 col-md-4 my-3">
            <Card>
                <Card.Body>
                    <Row>
                    <Col className="col-12 col-lg-4">
                    <span class="material-icons xl-icon color-2">code</span> 
                    </Col>
                        <Col className="col-12 col-lg-8 mt-2">
                            <h3 className="mb-0">Front End</h3>
                            <p>WEB DEVELOPMENT</p>
                        </Col>
                    </Row>
                    </Card.Body>
            </Card>
            </Col>
            <Col className="col-12 col-md-4 my-3">
            <Card>
                <Card.Body>
                    <Row>
                        <Col className="col-12 col-lg-4">
                            <span class="material-icons xl-icon color-3">filter_alt</span>
                        </Col>
                        <Col className="col-12 col-lg-8 mt-2">
                            <h3 className="mb-0">Database</h3>
                            <p>DEVELOPMENT</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            </Col>
        </Row>
  
        </Container>
    )
}

export default About;