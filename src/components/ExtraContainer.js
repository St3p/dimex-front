import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";
import AuthNavbar from "./AuthNavBar";


class ExtraContainer extends Component {
  render(){
      return (
          <>
          <AuthNavbar />
          <Row>
            <Col>
            <h2>Extra add ins.</h2>
           </Col>
          </Row>
            <Row>
              <Col>
              <h3><Link to="/resume">next</Link></h3>
              </Col>
            </Row>

          </>
      );
  }
}
export default ExtraContainer;
