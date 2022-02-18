import { Component } from "react";
import { Card, Col, Button, Container, Row, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const Reservations = (props) => {

const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordConfirmation: ""
})

const [displayValues, setDisplayValues] = useState(false)

const [fruit, setFruit] = useState("banana")

useEffect(() => {checkIfInputValuesNotEmpty()}, [formValues]);

const checkInputs = (e) => {
    if (formValues.name.length < 2) {
        document.getElementById("name-input").classList.add("nonvalid")
        e.preventDefault();
    }

    if (formValues.surname.length < 3) {
        document.getElementById("surname-input").classList.add("nonvalid")
        e.preventDefault();
    }   
    
   /*  console.log(
        formValues.password.split("")
        ); */
    
/*         for (let i = 0; i < formValues.password.split("").length; i++) {
          console.log(formValues.password.split("")[i]);
          console.log(parseInt(formValues.password.split("")[i]));
          console.log(isNaN(parseInt(formValues.password.split("")[i])));
          
    } */
  /*   console.log(
      !formValues.password.split("").some((item) => !isNaN(parseInt(item)))
    ); */

    if (!formValues.password.split("").some((item) => !isNaN(parseInt(item)))) {

        document.getElementById("password-input").classList.add("nonvalid");
         e.preventDefault();
         console.log("Digit missing");
    }

    if (formValues.password.length < 8 ) {
        document.getElementById("password-input").classList.add("nonvalid")
        e.preventDefault();
    }

    if (formValues.password !== formValues.passwordConfirmation) {
      document.getElementById("password-input").classList.add("nonvalid");
      document.getElementById("passwordConfirm-input").classList.add("nonvalid");
      e.preventDefault();
    }
    e.preventDefault();
    setDisplayValues(true);
}    

const checkIfInputValuesNotEmpty = () => {
   console.log("I check If Input Values Not Empty");
   /* setFruit("Kiwi") */
if (
  formValues.name &&
  formValues.surname &&
  formValues.email &&
  formValues.password &&
  formValues.passwordConfirmation
) {
  document.getElementById("submit-btn").disabled = false;
}
}

  return (
    <Container>
        {console.log("I rendered")} 
            
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="my-3">{fruit}</h1>
          {displayValues && (
            <>
              <h2>Form recap: </h2> <div>Name: {formValues.name}</div>
              <div> Surname: {formValues.surname}</div>{" "}
              <div className="mb-5"> Email: {formValues.email}</div>
            </>
          )}
          <Form onSubmit={(e) => checkInputs(e)}>
            <Form.Group className="mb-3" controlId="name-input">
              <Form.Label className="mb-0">Name</Form.Label>
              <Form.Text className="text-muted">
                Enter your first name (2 characters min)
              </Form.Text>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
                className=""
                value={formValues.name}
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="surname-input">
              <Form.Label className="mb-0">Surname</Form.Label>
              <Form.Text className="text-muted">
                Enter your first surname (3 characters min)
              </Form.Text>
              <Form.Control
                required
                type="text"
                placeholder="Enter your surname"
                value={formValues.surname}
                onChange={(e) =>
                  setFormValues({ ...formValues, surname: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email-input">
              <Form.Label className="mb-0">Email address</Form.Label>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password-input">
              <Form.Label className="mb-0">Password</Form.Label>
              <Form.Text className="text-muted">
                Must contain at least 8 characters, 1 digit, 1 letter
              </Form.Text>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({ ...formValues, password: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="passwordConfirm-input">
              <Form.Label className="mb-0">Password Confirmation</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password Confirmation"
                value={formValues.passwordConfirmation}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    passwordConfirmation: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Button
              className="mb-5"
              variant="primary"
              id="submit-btn"
              type="submit"
              disabled
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Reservations;
