import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import AnonNavBar from "./AnonNavBar"
import Masonry from 'react-masonry-css'
import LogoEXP from "./Carusel/logoEXP.png";
import Form from "react-bootstrap/Form";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";




function RegisterComponent (props){
  const { onSubmitClick, onUsernameChange, onPasswordChange, error, username, password, usernameError, passwordError } = props;
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
              <h1>Register</h1>
                {error &&
                    <><b>{error}<br /><br /></b></>
                }
                </Col>
              </Row>
              < br />
              < br />

              <Row>
                <Col>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username"
                                  placeholder="Enter username"
                                  name="username"
                                  id="username"
                                  onChange={onUsernameChange}
                                  value={username}
                                  isInvalid={usernameError !== ""}
                                  type="text"/>
                    <Form.Control.Feedback type="invalid">
                                Please choose a username.
                    </Form.Control.Feedback>
                    </Form.Group>

                     <Form.Group controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password"
                                   placeholder="Password"
                                   id="password"
                                   onChange={onPasswordChange}
                                   value={password}
                                   isInvalid={passwordError !== ""}/>
                      <Form.Control.Feedback type="invalid">
                                             Please choose a password.
                      </Form.Control.Feedback>
                      </Form.Group>
                        </Form>
              </Col>
            </Row>

            <Row>
            <Col>
            <ButtonToolbar
            className="justify-content-between">

            <Button
                    variant="melon"
                    type="submit"
                    id="add"
                    href="/" >Back
            </Button>

            <Button
                    variant="outline-success"
                    type="submit"
                    id="add"
                    onClick={onSubmitClick}> Submit
                     </Button>
            </ButtonToolbar>
            </Col>
            </Row>
          </Container>
          </Masonry>
          </>
      );
  }
export default RegisterComponent;
