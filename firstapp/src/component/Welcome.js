// src/components/Welcome.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Welcome.css';

const Welcome = () => {
  return (
    <Container fluid className="welcome-page">
      <Row className="min-vh-100 d-flex justify-content-center align-items-center text-center">
        <Col md={8} lg={6}>
          <h1 className="display-4">Welcome! Here you will find yourself!</h1>
          <p className="lead">Hi, I'm Vaibhav Shejol. I’m a Software Developer. Explore my work and get in touch!</p>
          <Button variant="primary" href="#contact">Contact Me</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
