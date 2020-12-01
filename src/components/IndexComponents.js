import React, { Component } from "react";
import { BrowserRouter, Link} from "react-router-dom";
import AnonNavBar from "./AnonNavBar"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function IndexComponents(){
  return (
    <>
    <AnonNavBar/>

    <Container>
      <Row>
        <Col fluid="auto"> <h1>Welcome</h1></Col>
      </Row>
      <Row>
        <Col>
            <Alert.Link href="/login">login here</Alert.Link>
        </Col>
      </Row>
      <Row>
        <Col>
            please login to began the quote process
        </Col>
      </Row>
    </Container>
    </>
  )
}


export default IndexComponents;
