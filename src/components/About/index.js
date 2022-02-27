import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container>
        <Row className="my-3 justify-content-md-center">
            <Col className="my-3">
            <p>1 of 2</p>
            </Col>
            <Col className="my-3">
            <span class="material-icons xl-icon color-1">
                    devices
                </span>
                <p class="xl-txt">Hello World!</p>
                <p class="lg-txt">
                    I'M SAM PLACE &amp; I'M A WEB&nbsp;DEVELOPER
                </p>
            </Col>
        </Row>
        </Container>
    )
}

export default About;