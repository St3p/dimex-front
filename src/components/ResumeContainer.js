import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";

class ResumeContainer extends Component {
  render(){
      return (
          <>
          <Row>
            <Col>
            <h2>resume.</h2>
           </Col>
          </Row>
            <Row>
              <Col>
              <h3><Link to="/home">finish</Link></h3>
              </Col>
            </Row>

          </>
      );
  }
}
export default ResumeContainer;
