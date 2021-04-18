import React, { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import { userInformationData } from "../../../App";
import './Services.css';

const Services = ({ newService, handleService, handleOrderPage }) => {
  const [userData, setUserData] = useContext(userInformationData);

  return (
    <>
      {userData.isSignIn && (
        <Col
          onClick={() => {
            handleService(newService);
            handleOrderPage();
          }}
          md={4}
          className="mb-4"
        >
          <div class="card_service">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <img src={`data:image/png;base64,${newService.image.img}`} alt=""/>
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h1>{newService.service}</h1>
                <p>{newService.description}</p>
                <button className="btn btn-primary">Order Here</button>
              </div>
            </div>
          </div>
          {/* <Card className="d-flex align-items-center service__card">
            <div className="service__img">
              <Card.Img
                variant="top"
                src={`data:image/png;base64,${newService.image.img}`}
              />
            </div>
            <Card.Body>
              <Card.Title>{newService.service}</Card.Title>
              <Card.Text className="text-secondary">
                {newService.description}
              </Card.Text>
            </Card.Body>
          </Card> */}
        </Col>
      )}
    </>
  );
};

export default Services;
