import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import helloWorld from "../../assets/hello-world.png";

function Home() {
    return (
        <Container>
        <Row className="my-3 justify-content-md-center">
            <Col className="my-3 col-12 col-md-8 col-lg-6">
                <img src = {helloWorld} alt="hello world" className='helloWorld w-100'/>
            </Col>
            <Col className="my-3 col-12 col-md-4 col-lg-6">
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

export default Home;