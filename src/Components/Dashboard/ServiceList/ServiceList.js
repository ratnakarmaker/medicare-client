import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./ServiceList.css";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";
import { userInformationData } from "../../../App";
import CircularProgress from "@material-ui/core/CircularProgress";

const ServiceList = () => {
  const [courseList, setCourseList] = useState([]);
  const [userData, setUserData] = useContext(userInformationData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const courseDataList = async () => {
      try {
        const res = await AxiosConfig.get("/course?email=" + userData.email);
        setCourseList(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    courseDataList();
  }, [userData.email]);

  return (
    <section className="serviceList">
      <Container>
        <Row className="justify-content-center ">
          {courseList.length === 0 && <CircularProgress color="secondary" />}
        </Row>
        <Row>
          {courseList.map((client, id) => (
            <Col key={id} md={4}>
              <Card className="mt-4 mb-4 serviceList__card">
                <Row className="text-center no-gutters">
                  <Card.Img
                    className="serviceList__img"
                    variant="top"
                    src={`data:image/png;base64,${client.image.img}`}
                  />
                  <Col sm={7}>
                    
                  </Col>
                  <Card.Body>
                    <Card.Title className="text-center"> {client.service} </Card.Title>
                    <Card.Text className="text-secondary">
                      {" "}
                      {client.description}
                    </Card.Text>
                    <Card.Body className="text-center">
                      <Button variant="outline-primary">Pending</Button>
                    </Card.Body>
                  </Card.Body>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceList;
