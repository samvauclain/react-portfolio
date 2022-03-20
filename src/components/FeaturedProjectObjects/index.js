import React, { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const FeaturedProjectObjects = () => {

const [featuredProjects] = useState(
    [
        {
            name: "Nosh Up",
            image: "nosh-up",
            github: "https://github.com/samvauclain/Nosh-Up",
            link: "https://nosh-up.herokuapp.com/",
            text: "Find new friends, discover new restaurants, eat delicious meals.",
        },

    ])

return ( 
    
    <Col className="my-3 col-12 col-md-8 col-lg-6">
        {featuredProjects.map((featuredProject, i) => (
        <Card>
        <Card.Body>
            <p className="xl-txt mb-1">Featured Project:</p>
            <Card.Title>{featuredProject.name}</Card.Title>
            <Card.Text>
                <p className="lg-txt mb-0">{featuredProject.text}</p>
            </Card.Text>
            <Button className='mb-2 me-2' variant="primary"><a href={featuredProject.link} target="_blank" rel="noreferrer">View Project</a></Button>
            <Button className='mb-2' variant="primary"><a href={featuredProject.github} target="_blank" rel="noreferrer">View Repo</a></Button>
        </Card.Body>
        </Card>
        
    ))
    }   
    </Col> 
    )
    
}
       
    export default FeaturedProjectObjects;