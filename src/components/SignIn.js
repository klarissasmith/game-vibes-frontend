import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { api } from "../services/api";

class SignIn extends Component {
  state = {
    error: false,
    fields: {
      username: "",
      password: "",
    },
  };

  //HANDLES UPDATING STATE
  handleChange = (e) => {
    const newFields = {
      ...this.state.fields,
      [e.target.username]: e.target.value,
    };
    this.setState({ fields: newFields });
  };

  //EVENT HANDLER FOR SUBMIT
  handleSubmit = (e) => {
    e.preventDefault();
    // fetch request to login
    api.auth.signIn(this.state.fields).then((resp) => {
      if (!resp.error) {
        // calls login function from App.js if no error from fetch
        this.props.signIn(resp);
        // redirects to home page
        this.props.history.push("/");
      } else {
        this.setState({ error: true });
      }
    });
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
                  <Form.Control type="username" placeholder="Enter username" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
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
