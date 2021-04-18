import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import creative from "../../../images/logos/1.png";
import speads from "../../../images/logos/2.png";
import authentic from "../../../images/logos/3.png";
import retrodesign from "../../../images/logos/4.png";
import retrologo from "../../../images/logos/5.png";
import mochaccino from "../../../images/logos/6.png";
import "./Client.css";

const Client = () => {
  return (
    <section className="client">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={2} className="text-center mb-3">
            <img width="100px" src={creative} alt="slack" />
          </Col>
          <Col md={2} className="text-center mb-3">
            <img width="100px" src={speads} alt="google" />
          </Col>
          <Col md={2} className="text-center mb-3">
            <img width="100px" src={authentic} alt="uber" />
          </Col>
          <Col md={2} className="text-center mb-3">
            <img width="100px" src={retrodesign} alt="netflix" />
          </Col>
          <Col md={2} className="text-center mb-3">
            <img width="100px" src={retrologo} alt="airbnb" />
          </Col>
          <Col md={2} className="text-center mb-3">
            <img width="100px" src={mochaccino} alt="airbnb" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Client;
