import React from 'react';
import resumePng from '../../assets/Sam-Place-Web-Development-and-Design-v2.png'
import resumePdf from '../../assets/Sam-Place-Web-Development-and-Design-v2.pdf'
import {Container, Row, Col} from "react-bootstrap";

function Resume() {
    return (
        <Container>
        <Row>
        <Col>
        <a href={resumePdf} target="_blank" rel="noreferrer"> 
            <img src ={resumePng} alt="resume" className='resume w-50 d-block m-auto offsest-box-color-2'/>
        </a>
        </Col>
        </Row>
        </Container>
    )
}

export default Resume;