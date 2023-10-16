import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <Container fluid className="footer">
    <Row className="px-5">
      <Col>
        <p>Lunch</p>
        <hr />
        <span>Monday - Friday: 11:00am - 2:30pm</span>
        <br />
        <span>Saturday - Sunday: Not open</span>
      </Col>
      <Col>
        <p>Bar</p>
        <hr />
        <span>Monday - Friday: From 11:00am closing</span>
        <br />
        <span>Saturday - Sunday: Not open</span>
      </Col>
      <Col>
        <p>Dinner</p>
        <hr />
        <span>Monday - Friday: 5:00pm - 9:00pm</span>
        <br />
        <span>Saturday - Sunday: Not open</span>
      </Col>
    </Row>
  </Container>
);

export default Footer;
