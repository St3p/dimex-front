import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import AnonNavBar from "./AnonNavBar"
import Form from "react-bootstrap/Form";


function LoginComponent (props){
  const { username, password, error, onUsernameChange, onPasswordChange, onClick} = props;
  const isInvalid = error !== "";
      return (
          <>
          <AnonNavBar/>
          <Container>
            <Row>
              <Col>
              <h1>Login</h1>
              {isInvalid &&
                  <div>
                      <Alert variant="danger">Wrong username or password</Alert>
                  </div>
              }
              </Col>
            </Row>
            <Row>
              <Col>
                  <Form>
                      <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email"
                                    placeholder="Enter email"
                                    onChange={onUsernameChange}
                                    isInvalid={isInvalid}
                                    type="text"/>

                      <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                      </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password"
                                    placeholder="Password"
                                    onChange={onPasswordChange}
                                    isInvalid={isInvalid}
                                    type="text" />
                      </Form.Group>

                      <Button
                              variant="primary"
                              type="submit"
                              onClick={onClick}> Login
                      </Button>
                  </Form>
                      <Alert.Link href="/register">register</Alert.Link>
              </Col>
            </Row>
          </Container>

          </>
      );
  }
export default LoginComponent;
