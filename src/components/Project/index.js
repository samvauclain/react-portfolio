import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import walkNSpot from "../../assets/walk-n-spot.png";
import dreamHome from "../../assets/weather-real-estate.png";
import taskinator from "../../assets/taskinator.jpg";
import runBuddy from "../../assets/run-buddy.jpg";
import horiseon from "../../assets/horiseon.jpg";

function Project() {
    return (
        <Container>
        <Row className="justify-content-md-center align-items-center my-3 py-3">
            <Col className="my-3 col-12 col-md-8 col-lg-6">
                <img src = {walkNSpot} alt="hello world" className='walkNSpot w-100 offsest-box-color-2'/>
            </Col>
            <Col className="my-3 col-12 col-md-4 col-lg-6">
            <Card className="py-3">
            <Card.Body>   
            <span className="material-icons xl-icon color-2">
                    devices
                </span>
                <p className="xl-txt mb-1">Featured Project:</p>
                <p className="lg-txt mb-0">WALK'N SPOT</p>
                <p>Search for a list of trails by city & types of animals seen on the trails.</p>   
            </Card.Body>
            </Card>
            </Col>
        </Row>

        <Row className="my-3 py-3">
            <Col>
            <Card>
                <Card.Img variant="top" src = {dreamHome} alt="hello world" className='dreamHome w-100 offsest-box-color-3-sm' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card>
            <Card.Img variant="top" src = {taskinator} alt="hello world" className='taskinator w-100 offsest-box-color-3-sm' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card>
            <Card.Img variant="top" src =  {runBuddy} alt="hello world" className='runBuddy w-100 offsest-box-color-3-sm' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card>
            <Card.Img variant="top" src =  {horiseon} alt="hello world" className='horiseon w-100 offsest-box-color-3-sm' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>


        </Container>
    )
}

export default Project;