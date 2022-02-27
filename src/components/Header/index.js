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
          <h2>
            <a data-testid="link" href="/">
            <span class="material-icons static-gradient">extension</span> Sam Place
            </a>
          </h2>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    {pages.map((page) => (
                        <Nav.Link className={`nav-item ${currentPage.name === page.name && "active"}`}key={page.name}>
                        <span onClick={() => {setCurrentPage(page)}}>{page.name}</span>
                        </Nav.Link>
                        ))}
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>   
    )
}

export default Header