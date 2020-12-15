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
  const { username, password, error, onUsernameChange, onPasswordChange, onClick} = props;
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
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                                  placeholder="username"
                                  name="username"
                                  id="username"
                                  onChange={onUsernameChange}
                                  value={username}
                                  type="text"/>
                    </Form.Group>

                     <Form.Group controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password"
                                   placeholder="Password"
                                   id="password"
                                   onChange={onPasswordChange}
                                   value={password}
                                   type="text" />
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
                    variant="melon"
                    type="submit"
                    id="add"
                    onClick={onClick}> Submit
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
