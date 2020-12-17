import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import AnonNavBar from "./AnonNavBar"
import Form from "react-bootstrap/Form";
import Masonry from 'react-masonry-css'
import LogoEXP from "./Carusel/logoEXP.png";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";


function LoginComponent (props){
  const { username, password, error, onUsernameChange, onPasswordChange, onClick} = props;
  const isInvalid = error !== "";
      return (
          <>
          <AnonNavBar/>
          < br />
          < br />
          < br />

          <Masonry
            breakpointCols={2}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
          <Container>
            <Row>
              <Col>
              <img variant="top" src={LogoEXP} />
              </Col>
            </Row>
          </Container>
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
                      </Form>
                      <ButtonToolbar
                      className="justify-content-between">

                      <Button
                              type="submit"
                              onClick={onClick}
                              variant="outline-success"> Login
                      </Button>
                      <Button href="/register"
                              variant="melon">register
                      </Button>
                      </ButtonToolbar>
              </Col>
            </Row>
          </Container>
          </Masonry>

          </>
      );
  }
export default LoginComponent;
