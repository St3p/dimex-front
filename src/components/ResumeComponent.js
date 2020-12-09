import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";
import AuthNavbar from "./AuthNavBar";
import Masonry from 'react-masonry-css'
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";


function ResumeComponent(props) {
  return (
    <>
    <AuthNavbar />
    <Container>
          <Row>
            <Col>
            < br />
            <Nav justify variant="tabs" defaultActiveKey="/resume">
            <Nav.Item>
              <Nav.Link href="/quote" >1. Company</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/material" >2. Material</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/machineProcess" >3. Machine</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/criticPoints" >4. Critic Points</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/presicionLevel" >5. Precision</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/resume" >6. Finalize</Nav.Link>
            </Nav.Item>
          </Nav>
            < br />
            < br />
            <h4>Finalize</h4>
            <p>Please check the information</p>
            <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
    </Container>
    <Container>

    <Row>
    <Col >
    < br />
    < br />

    <ButtonToolbar
    className="justify-content-between">

    <Button
            variant="melon"
            type="submit"
            id="add"
            href="/presicionLevel" >Back
    </Button>

    <Button
            variant="melon"
            type="submit"
            id="add"
            onClick={null}> Submit
             </Button>
    </ButtonToolbar>
    </Col>
    </Row>
    </Container>
     </>
 );
}

export default ResumeComponent;
