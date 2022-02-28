import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import walkNSpot from "../../assets/walk-n-spot.png";
import dreamHome from "../../assets/weather-real-estate.png";
import taskinator from "../../assets/taskinator.jpg";
import runBuddy from "../../assets/run-buddy.jpg";
import horiseon from "../../assets/horiseon.jpg";

function Portfolio() {
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
                <Button className='me-2 mb-2' variant="primary"><a href="https://walk-n-spot.herokuapp.com/" target="_blank" rel="noreferrer">View Project</a></Button>
                <Button className='mb-2' variant="primary"><a href="https://github.com/samvauclain/Walk-n-Spot" target="_blank" rel="noreferrer">View Repo</a></Button>
                
            </Card.Body>
            </Card>
            </Col>
        </Row>

        <Row className="my-3 py-3">
            <Col className="col-12 col-sm-6 col-lg-3 my-3">
            <Card>
                <Card.Img variant="top" src = {dreamHome} alt="hello world" className='dreamHome w-100 offsest-box-color-3-sm' />
                <Card.Body>
                    <Card.Title>Dream Home</Card.Title>
                    <Card.Text>
                    Weather & Real Estate Combined. Find your dream home with your prefered weather.
                    </Card.Text>
                    <Button className='mb-2 me-2' variant="primary"><a href="https://samvauclain.github.io/weather-and-real-estate/" target="_blank" rel="noreferrer">View Project</a></Button>
                    <Button className='mb-2' variant="primary"><a href="https://github.com/samvauclain/weather-and-real-estate" target="_blank" rel="noreferrer">View Repo</a></Button>
                </Card.Body>
                </Card>
            </Col>
            <Col className="col-12 col-sm-6 col-lg-3 my-3">
            <Card>
            <Card.Img variant="top" src = {taskinator} alt="hello world" className='taskinator w-100 offsest-box-color-3-sm' />
                <Card.Body>
                    <Card.Title>Taskinator</Card.Title>
                    <Card.Text>
                    A to-do and kanban board wrapped into one website app. Create tasks and update their status to increase your productivity.
                    </Card.Text>
                    <Button className='me-2 mb-2' variant="primary"><a href="https://samvauclain.github.io/taskinator/" target="_blank" rel="noreferrer">View Project</a></Button>
                    <Button className='mb-2' variant="primary"><a href="https://github.com/samvauclain/taskinator" target="_blank" rel="noreferrer">View Repo</a></Button>
                </Card.Body>
                </Card>
            </Col>
            <Col className="col-12 col-sm-6 col-lg-3 my-3">
            <Card>
            <Card.Img variant="top" src =  {runBuddy} alt="hello world" className='runBuddy w-100 offsest-box-color-3-sm' />
                <Card.Body>
                    <Card.Title>Run Buddy</Card.Title>
                    <Card.Text>
                    Run Buddy needed a landing page for fitness membership sign ups. Built with HTML5 and CSS3.
                    </Card.Text>
                    <Button className='mb-2 me-2' variant="primary"><a href="https://samvauclain.github.io/run-buddy/" target="_blank" rel="noreferrer">View Project</a></Button>
                    <Button className='mb-2' variant="primary"><a href="https://github.com/samvauclain/run-buddy" target="_blank" rel="noreferrer">View Repo</a></Button>
                </Card.Body>
                </Card>
            </Col>
            <Col className="col-12 col-sm-6 col-lg-3 my-3">
            <Card>
            <Card.Img variant="top" src={horiseon} alt="hello world" className='horiseon w-100 offsest-box-color-3-sm' />
                <Card.Body>
                    <Card.Title>Horiseon</Card.Title>
                    <Card.Text>
                    Horiseon needed a code refactor, to make their site more effecient and accessible. I condensed the code and added the needed accessibilty tags. Refactored HTML5 and CSS3.
                    </Card.Text>
                    <Button className='me-2 mb-2' variant="primary"><a href="https://samvauclain.github.io/mod-1-challenge/" target="_blank" rel="noreferrer">View Project</a></Button>
                    <Button className='mb-2' variant="primary"><a href="https://github.com/samvauclain/mod-1-challenge" target="_blank" rel="noreferrer">View Repo</a></Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>


        </Container>
    )
}

export default Portfolio;