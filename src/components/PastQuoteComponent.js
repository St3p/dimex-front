import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthNavBar from "./AuthNavBar";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";


class PastQuoteComponent extends Component{
  render(){
    return(
      <>
      <AuthNavBar />
      <Container>
      <Row>
        <Col>
        <h1>Quotes</h1>
        <p>List of Quotes done using this app</p>
        <br />
        <br />

        <ButtonToolbar
        className="justify-content-between">

        <Button
                variant="melon"
                type="submit"
                id="add"
                href="/home" >Back
        </Button>
        </ButtonToolbar>
        </Col>
      </Row>

</Container>
      </>
    );
  }
}
export default PastQuoteComponent;
