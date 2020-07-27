import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { api } from "../services/api";

class SignIn extends Component {
 

  //HANDLES UPDATING STATE
  handleChange = (e) => {
   
  };

  //EVENT HANDLER FOR SUBMIT
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Container className="mt-5">
          <Card className="col-sm-6">
            <Card.Body className="col-sm-6">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" placeholder="Enter username" name="username" onChange={this.handleChange}/>
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default SignIn;
