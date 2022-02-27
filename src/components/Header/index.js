import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header(props) {

    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;
    
    return (
        <header className="pb-3">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand><span class="material-icons static-gradient position-relative align-icons">extension</span> Portfolio For Sam Place</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
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