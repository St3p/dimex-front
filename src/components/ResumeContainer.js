import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";
import AuthNavbar from "./AuthNavBar";
import ResumeComponent from "./ResumeComponent"

class ResumeContainer extends Component {
  render(){
      return (
        <ResumeComponent/>
      );
  }
}
export default ResumeContainer;
