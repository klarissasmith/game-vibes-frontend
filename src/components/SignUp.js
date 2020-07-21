import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class SignUp extends Component {
  render() {
    return (
      <div>
        <Container className="mt-5">
          <Card className="col-sm-6">
            <Card.Body className="col-sm-6">
              <Form className="text-center">
                <Form.Row>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                      type="firstname"
                      placeholder="Enter first name"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                      type="lastname"
                      placeholder="Enter last name"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="username"
                      placeholder="Enter your username"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                </Form.Row>

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

export default SignUp
