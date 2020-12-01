import React, { Component } from "react";
import { BrowserRouter, Link} from "react-router-dom";
import AuthNavBar from "./AuthNavBar"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function HomeComponents(){
  return (
    <>
    <AuthNavBar/>
    <Container>
      <Row>
        <Col fluid="auto"> <h1>Home</h1></Col>
      </Row>
      <Row>
        <Col>
        <h3><Link to="/machines">Machines</Link></h3>
        </Col>
      </Row>
      <Row>
        <Col>
        <h3><Link to="/companies">Companies</Link></h3>
        </Col>
      </Row>
      <Row>
        <Col>
        <h3><Link to="/quote">New Quote</Link></h3>
        </Col>
      </Row>
      <Row>
        <Col>
        <h3><Link to="/newMachine">Register New Machine</Link></h3>
        </Col>
      </Row>
      <Row>
        <Col>
        <h3><Link to="/newCompany">Register New Company</Link></h3>
        </Col>
      </Row>
      <Row>
        <Col>
        <h3><Link to="/pastQuote">Quotes</Link></h3>
        </Col>
      </Row>
    </Container>
    </>
  )
}


export default HomeComponents;
