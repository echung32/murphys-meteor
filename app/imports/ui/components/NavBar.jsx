import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

const NavBar = () => (
  <Container fluid id="topMenu">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Image
            src="http://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/murphyslogowhite.png"
            width="250px"
          />
        </Navbar.Brand>
        <Nav className="justify-content-end gap-3">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About Us</Nav.Link>
          <Nav.Link>St. Patrick`&apos;s Day</Nav.Link>
          <Nav.Link>To Go Ordering</Nav.Link>
          <Nav.Link><Instagram /></Nav.Link>
          <Nav.Link><Facebook /></Nav.Link>
          <Nav.Link><Twitter /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </Container>
);

export default NavBar;
