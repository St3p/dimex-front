import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";

class MaterialContainer extends Component {
  render(){
      return (
          <>
          <Row>
            <Col>
            <h2>Materials</h2>
           </Col>
          </Row>
            <Row>
              <Col>
              <h3><Link to="/machineProcess">next</Link></h3>
              </Col>
            </Row>

          </>
      );
  }
}
export default MaterialContainer;
