import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const ProjectObjects = () => {
   
const [projects] = useState(
    [ 
        {
            name: "Walk 'n Spot",
            image: "walk-n-spot",
            github: "https://github.com/samvauclain/Walk-n-Spot",
            link: "https://walk-n-spot.herokuapp.com",
            text: "Search for a list of trails by city & types of animals seen on the trails.",
        },
        {
            name: "Dream Home",
            image: "weather-real-estate",
            github: "https://github.com/samvauclain/weather-and-real-estate",
            link: "https://samvauclain.github.io/weather-and-real-estate/",
            text: "Weather & Real Estate Combined. Find your dream home with your prefered weather.",
        },
        {
            name: "Taskinator",
            image: "taskinator",
            github: "https://github.com/samvauclain/taskinator",
            link: "https://samvauclain.github.io/taskinator/",
            text: "A to-do and kanban board wrapped into one website app. Create tasks and update their status to increase your productivity.",
        },
        {
            name: "Run Buddy",
            image: "run-buddy",
            github: "https://github.com/samvauclain/run-buddy",
            link: "https://samvauclain.github.io/run-buddy/",
            text: "Run Buddy needed a landing page for fitness membership sign ups. Built with HTML5 and CSS3.",
        },
    ])

return (     
        <Row className="my-3 py-3">
            {projects.map((project, i) => (
                <Col className="col-12 col-sm-6 col-lg-3 my-3">
                <Card>
                <Card.Img variant="top" alt ={project.name} className="w-100 offsest-box-color-3-sm" src={require(`../../assets/${project.image}.jpg`)} />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                        {project.text}
                    </Card.Text>
                    <Button className='mb-2 me-2' variant="primary"><a href={project.link} target="_blank" rel="noreferrer">View Project</a></Button>
                    <Button className='mb-2' variant="primary"><a href={project.github} target="_blank" rel="noreferrer">View Repo</a></Button>
                </Card.Body>
                </Card>
                </Col> 
              ))
            }   
        </Row>
    )
}
   
export default ProjectObjects;

// import walkNSpot from "../../assets/walk-n-spot.png";
// import dreamHome from "../../assets/weather-real-estate.png";
// import taskinator from "../../assets/taskinator.jpg";
// import runBuddy from "../../assets/run-buddy.jpg";
// import horiseon from "../../assets/horiseon.jpg";