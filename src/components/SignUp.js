import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { api } from "../services/api";

class SignUp extends Component {
 

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
              <Form className="text-center" onSubmit={this.handleSubmit}>
                <Form.Row>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                      type="firstname"
                      name="firstname"
                      placeholder="Enter first name"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                      type="lastname"
                      name="lastname"
                      placeholder="Enter last name"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="username"
                      name="username"
                      placeholder="Enter your username"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" onChange={this.handleChange} />
                    
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type="password" name="password" />
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
