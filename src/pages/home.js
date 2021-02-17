import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Home_Page() {
  return (
    <Container>
      <Row>
        <Col md={3} style={{backgroundColor:"red"}}>1</Col>
        <Col md={6} style={{backgroundColor:"yellow"}}>1</Col>
        <Col md={3} style={{backgroundColor:"green"}}>1</Col>
      </Row>
    </Container>
  );
}

export default Home_Page;
