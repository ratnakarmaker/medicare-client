import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import bannerImg from "../../../images/slider3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <main className=" d-flex align-items-center bannerImg">
      <Container>
        <Row>
          <Col md={5}>

          </Col>
          <Col md={{ span: 5, offset: 2 }} className="mt-5 mb-5">
            <h5 className="text-right">
                We Provide Total
            </h5>
            <h1 className="text-right text-primary">
              Health Care Solution
            </h1>
            <p className="text-parr">
              Working together as an interdisciplinary team, many highly trained health professionals besides medical practitioners are involved in modern health care
            </p>
            <Button className="btn btn-primary pl-5 pr-5 pt-2 pb-2 banner__btn">
              Hire us
            </Button>
          </Col>

        </Row>
      </Container>
    </main>
  );
};

export default Banner;
