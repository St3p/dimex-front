import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";
import AuthNavbar from "./AuthNavBar";
import PrecisionLevelComponent from "./PrecisionLevelComponent"
import { step5WizardSetQuote } from "../Store/QuoteStore";

class PrecisionLevelContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        h7Hole: "",
        h8Hole: "",
        h9Hole: "",
        h11Hole: "",
        h6Axis: "",
        h7Axis: "",
        h9Axis: "",
        h11Axis: ""
      }
      this.onSubmitClick = this.onSubmitClick.bind(this);
      this.onH6AxisChange = this.onH6AxisChange.bind(this);
      this.onH7HoleChange = this.onH7HoleChange.bind(this);
      this.onH7AxisChange = this.onH7AxisChange.bind(this);
      this.onH8HoleChange = this.onH8HoleChange.bind(this);
      this.onH9AxisChange = this.onH9AxisChange.bind(this);
      this.onH9HoleChange = this.onH9HoleChange.bind(this);
      this.onH11AxisChange = this.onH11AxisChange.bind(this);
      this.onH11HoleChange = this.onH11HoleChange.bind(this);

    }
    onH6AxisChange(e) {
        this.setState({
            h6Axis: 600,
        });
    };

    onH7HoleChange(e) {
        this.setState({
            h7Hole: 500,
        });
    };

    onH7AxisChange(e) {
        this.setState({
            h7Axis: 500,
        });
    };

    onH8HoleChange(e) {
        this.setState({
            h8Hole: 500,
        });
    };

    onH9AxisChange(e) {
        this.setState({
            h9Axis: 500,
        });
    };

    onH9HoleChange(e) {
        this.setState({
            h9Hole: 500,
        });
    };

    onH11AxisChange(e) {
        this.setState({
            h11Axis: 500,
        });
    };

    onH11HoleChange(e) {
        this.setState({
            h11Hole: 500,
        });
    };

    onSubmitClick(e) {
      const { h7Hole, h8Hole, h9Hole, h11Hole,
              h6Axis, h7Axis, h9Axis, h11Axis } = this.state;
      const postData = {
        h7Hole: h7Hole,
        h8Hole: h8Hole,
        h9Hole: h9Hole,
        h11Hole: h11Hole,
        h6Axis: h6Axis,
        h7Axis: h7Axis,
        h9Axis: h9Axis,
        h11Axis: h11Axis
      };

      step5WizardSetQuote(h7Hole, h8Hole, h9Hole, h11Hole,
              h6Axis, h7Axis, h9Axis, h11Axis);
      this.props.history.push("/resume");}

  render(){
    const {h7Hole, h8Hole, h9Hole, h11Hole,
            h6Axis, h7Axis, h9Axis, h11Axis } = this.state;
    return (
        <PrecisionLevelComponent
            onH6AxisChange = {this.onH6AxisChange}
            onH7HoleChange = {this.onH7HoleChange}
            onH7AxisChange = {this.onH7AxisChange}
            onH8HoleChange = {this.onH8HoleChange}
            onH9AxisChange = {this.onH9AxisChange}
            onH9HoleChange = {this.onH9HoleChange}
            onH11AxisChange = {this.onH11AxisChange}
            onH11HoleChange = {this.onH11HoleChange}
            onSubmitClick = {this.onSubmitClick}
            h7Hole= {h7Hole}
            h8Hole= {h8Hole}
            h9Hole= {h9Hole}
            h11Hole= {h11Hole}
            h6Axis= {h6Axis}
            h7Axis= {h7Axis}
            h9Axis= {h9Axis}
            h11Axis= {h11Axis}/>
      );
  }
}
export default PrecisionLevelContainer;
