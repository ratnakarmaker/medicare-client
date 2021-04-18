import React, { useState } from "react";
import "./OrderForm.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const OrderForm = () => {
  const [orderForm, setOrderForm] = useState({});
  const { register, handleSubmit, watch, errors } = useForm({});

  const [file, setFile] = useState(null);

  const onSubmit = (data) => {};

  return (
    <>
      <Container className="order">
        <Row>
          <Col md={{ span: 6 }} className="mt-5 mb-5">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Your name/ Company name"
                  className="order__form"
                  ref={register({
                    required: "enter your name",
                    pattern: {
                      value: /[A-Z][a-z]/,
                      message: "First text should be capitalized",
                    },
                    minLength: {
                      value: 5,
                      message: " should be 5 characters",
                    },
                  })}
                />
                <span style={{ color: "red" }}>
                  {errors.name && errors.name.message}
                </span>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="enter email address"
                  className="order__form"
                  ref={register({
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: 'Email should be "@" & "." ',
                    },
                  })}
                />
                <span style={{ color: "red" }}>
                  {errors.email && errors.email.message}
                </span>
              </Form.Group>
              <input
                className="btn btn-primary pl-5 pr-5 pt-2 pb-2 mainNav__btn"
                type="submit"
                value="Submit"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderForm;
