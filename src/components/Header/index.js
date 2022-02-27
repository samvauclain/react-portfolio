import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header(props) {

    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;
    
    return (
        <header className="">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"><span class="material-icons static-gradient position-relative align-icons">extension</span> Sam Place</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                    <Nav>
                    {pages.map((page) => (
                        <Nav.Link className={`nav-item ${currentPage.name === page.name && "active"}`}key={page.name}>
                        <span onClick={() => {setCurrentPage(page)}}>{page.name}</span>
                        </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>   
    )
}

export default Header