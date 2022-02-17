import { Component } from "react";
import { Card, Col, Button, Container, Row, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const Reservations = (props) => {

const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordConfirmation: ""
})

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="my-3">Reservation form</h1>
          <Form>
            <Form.Group className="mb-3" controlId="name-input">
              <Form.Label className="mb-0">Name</Form.Label>
              <Form.Text className="text-muted">
                Enter your first name
              </Form.Text>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={formValues.name}
                onChange={(e) => setFormValues({...formValues, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="surname-input">
              <Form.Label className="mb-0">Surname</Form.Label>
              <Form.Text className="text-muted">
                Enter your first surname
              </Form.Text>
              <Form.Control
                type="text"
                placeholder="Enter your surname"
                value={formValues.surname}
                onChange={(e) => setFormValues({...formValues, surname: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email-input">
              <Form.Label className="mb-0">Email address</Form.Label>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formValues.email}
                onChange={(e) => setFormValues({...formValues, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password-input">
              <Form.Label className="mb-0">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={formValues.password}
                onChange={(e) => setFormValues({...formValues, password: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="passwordConfirm-input">
              <Form.Label className="mb-0">Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password Confirmation"
                value={formValues.passwordConfirmation}
                onChange={(e) =>
                  setFormValues({...formValues, passwordConfirmation: e.target.value })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Reservations;
