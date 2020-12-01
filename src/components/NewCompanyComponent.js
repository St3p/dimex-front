import React, { Component} from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import AnonNavBar from "./AnonNavBar"
import Form from "react-bootstrap/Form";

import AuthNavBar from "./AuthNavBar";

function NewCompanyComponent(props) {
    const {
         company, logo, description, address,

         onCompanyChange,onlogoChange, onDescriptionChange, onSubmitClick
     } = props;
    return (
        <>
            <AuthNavBar />
            <h1>Add New Company</h1>
            <p>Please fill out this form</p>
            <br />
            <Container>
            <Row>
              <Col>
                  <Form>
                      <Form.Group controlId="formBasicEmail">
                      <Form.Label>Company</Form.Label>
                      <Form.Control type="text"
                                    placeholder="company"
                                    onChange={onCompanyChange}
                                    value={company}
                                    id="company"
                                    name="company"
                                    />
                      </Form.Group>
                      </Form>
                  </Col>
                </Row>

                <Row>
                  <Col>
                      <Form>
                          <Form.Group controlId="formBasicEmail">
                          <Form.Label>Logo</Form.Label>
                          <Form.Control type="text"
                                        placeholder="logo"
                                        onChange={onlogoChange}
                                        value={logo}
                                        id="logo"
                                        name="logo"
                                        />
                          </Form.Group>
                          </Form>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                          <Form>
                              <Form.Group controlId="formBasicEmail">
                              <Form.Label>Description</Form.Label>
                              <Form.Control type="text"
                                            placeholder="description"
                                            onChange={onDescriptionChange}
                                            value={description}
                                            id="description"
                                            name="description"
                                            />
                              </Form.Group>
                              </Form>
                          </Col>
                        </Row>

            <br />
            <br /><br />
            <Row>
            <Col>
            <Button
                    variant="primary"
                    type="submit"
                    id="add"
                    onClick={onSubmitClick}> Submit
            </Button>

            <br />
            <Link to="/dashboard">Back</Link>
            </Col>
          </Row>

  </Container>
        </>
    );
}

export default NewCompanyComponent
