import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Donate_Home from "../component/donate_home";

function Home_Page() {
  return (
    <Container>
      <Row>
        <Col md={3} style={{ marginTop: "20px" }}>
          <Donate_Home />
        </Col>
        <Col md={6} style={{ backgroundColor: "yellow", marginTop: "20px" }}>
          1
        </Col>
        <Col md={3} style={{ backgroundColor: "green", marginTop: "20px" }}>
          1
        </Col>
      </Row>
    </Container>
  );
}

export default Home_Page;
