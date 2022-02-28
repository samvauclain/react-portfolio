import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import helloWorld from "../../assets/hello-world.png";
import html5Img from "../../assets/icon_html.png";
import css3Img from "../../assets/icon_css.png";
import jsImg from "../../assets/icon_js.png";
import reactImg from "../../assets/icon_react.png";
import nodeImg from "../../assets/icon_node.png";
import mysqlImg from "../../assets/icon_mysql.png";
import mongoImg from "../../assets/icon_mongo.png";

function Home() {
    return (
        <Container>
        <Row className="justify-content-md-center align-items-center my-3 py-3">
            <Col className="my-3 col-12 col-md-8 col-lg-6">
                <img src = {helloWorld} alt="hello world" className='helloWorld w-100 offsest-box-color-1'/>
            </Col>
            <Col className="my-3 col-12 col-md-4 col-lg-6">
            <Card className="py-3">
            <Card.Body>               
                <span className="material-icons xl-icon color-1 mt-3">
                    devices
                </span>
                <p className="xl-txt mb-0">Hello World!</p>
                <p className="lg-txt mb-3">
                    I'M SAM PLACE &amp; I'M A WEB&nbsp;DEVELOPER
                </p>
            </Card.Body>
            </Card>
            </Col>
        </Row>

        <Card>
        <Card.Body>   
        <Row>
            <Col className="col-12 col-sm-3 col-md-2 col-xxl-1 mb-2">
            <span class="material-icons xl-icon">paid</span>
            </Col>
            <Col className="col-12 col-sm-9 col-md-10 col-xxl-11 mb-2">
                <h3 className="mt-3">Skills That Pay</h3>
                <p>THE BILLS:</p>
            </Col>
        </Row>
        </Card.Body>
        </Card>

        <Row className="my-3 justify-content-md-center text-center">
            <Col className="col mb-2">
                <Card>
                    <Card.Body>  
                        <Col className="mt-2">
                        <img src = {html5Img} alt="hello world" className='html5Img w-25 d-block m-auto'/>
                        <p>HTML5</p>
                        </Col>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col mb-2">
            <Card>
                <Card.Body>            
                <Col className="mt-2">
                    <img src = {css3Img} alt="hello world" className='css3Img w-25 d-block m-auto'/>
                    <p>CSS3</p>
                    </Col>
                </Card.Body>
            </Card>
            </Col>
            <Col className="col mb-2">
            <Card>
                <Card.Body>            
                <Col className="mt-2">
                    <img src = {jsImg} alt="hello world" className='jsImg w-25 d-block m-auto'/>
                    <p>JavaScript</p>
                    </Col>
                </Card.Body>
            </Card>
            </Col>
            <Col className="col mb-2">
            <Card>
                <Card.Body>            
                <Col className="mt-2">
                    <img src = {reactImg} alt="hello world" className='reactImg w-25 d-block m-auto'/>
                    <p>React</p>
                    </Col>
                </Card.Body>
            </Card>
            </Col>
            <Col className="col mb-2">
            <Card>
                <Card.Body>            
                <Col className="mt-2">
                    <img src = {nodeImg} alt="hello world" className='nodeImg w-25 d-block m-auto'/>
                    <p>Node</p>
                    </Col>
                </Card.Body>
            </Card>
            </Col>
            <Col className="col mb-2">
            <Card>
                <Card.Body>            
                <Col className="mt-2">
                    <img src = {mysqlImg} alt="hello world" className='mysqlImg w-25 d-block m-auto'/>
                    <p>MySql</p>
                    </Col>
                </Card.Body>
            </Card>
            </Col>
            <Col className="col mb-2">
            <Card>
                <Card.Body>            
                <Col className="mt-2">
                    <img src = {mongoImg} alt="hello world" className='mongoImg w-25 d-block m-auto'/>
                    <p>Mongo DB</p>
                    </Col>
                </Card.Body>
            </Card>
            </Col>
        </Row>


        </Container>
    )
}

export default Home;