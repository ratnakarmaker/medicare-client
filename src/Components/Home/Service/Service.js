import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Service.css";
import Services from "../Services/Services";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";
import { useHistory } from "react-router-dom";
import { userInformationData, userInformationCourse } from "../../../App";
import CircularProgress from "@material-ui/core/CircularProgress";

const Service = () => {
  const [userData, setUserData] = useContext(userInformationData);
  const [course, setCourse] = useContext(userInformationCourse);
  const [loading, setLoading] = useState(false);

  const [service, setService] = useState([]);

  const history = useHistory();

  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    const handleAdmin = async (e) => {
      try {
        const res = await AxiosConfig.post("/isAdmin", {
          data: userData.email,
        });
        setAdmin(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleAdmin();
  }, []);

  const handleAdmin = () => {
    history.push("/admin-service-list");
  };

  const handleOrderPage = () => {
    history.push("/order");
  };

  const handleGoogleLogin = () => {
    history.push("/google-sign-in");
  };

  useEffect(() => {
    const handleService = async () => {
      try {
        const res = await AxiosConfig.get("/service");
        setService(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleService();
  }, []);

  const handleService = async (singleService) => {
    try {
      await AxiosConfig.post("/selectedCourse", {
        data: { ...userData, ...singleService },
      });
      setCourse(singleService);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="service">
      <Container>
        <Row className="justify-content-center">
          <h1>
            Provide Awesome <span className="service__header">Services</span>{" "}
          </h1>
        </Row>
        <Row className="justify-content-center mt-4 ">
          {service.length === 0 && <CircularProgress color="secondary" />}
          {service
            .map((newService, _id) => (
              <Services
                newService={newService}
                handleService={handleService}
                handleOrderPage={handleOrderPage}
                loading={loading}
                key={_id}
              />
            ))
            .slice(0, 6)}

          {!userData.isSignIn && (
            <Button
              variant="outline-primary"
              onClick={() => handleGoogleLogin()}
            >
              Place a order Please You Must Log In Here
            </Button>
          )}
        </Row>
        <Row className="justify-content-center mt-4">
          {isAdmin && (
            <Button variant="primary" onClick={() => handleAdmin()}>
              Welcome To You Admin {userData.name}
            </Button>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
