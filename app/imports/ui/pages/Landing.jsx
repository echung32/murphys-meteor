import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import MiddleSection from '../components/MiddleSection';
import Footer from '../components/Footer';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container fluid className="p-0">
    <NavBar />
    <MiddleSection />
    <Footer />
  </Container>
);

export default Landing;
