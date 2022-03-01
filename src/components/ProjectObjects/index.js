import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

// image: walk-n-spot.png
// image: weather-real-estate.png
// image: taskinator
// image: run-buddy
// image: horiseon

const ProjectObjects = () => {
   
const [projects] = useState(
    [ 
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
        {
            name: "Horiseon",
            image: "horiseon",
            github: "https://github.com/samvauclain/mod-1-challenge",
            link: "https://samvauclain.github.io/mod-1-challenge/",
            text: "Horiseon needed a code refactor, to make their site more effecient and accessible. I condensed the code and added the needed accessibilty tags. Refactored HTML5 and CSS3.",
        }
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