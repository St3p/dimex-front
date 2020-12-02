import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";
import { getDataCard } from "../API/NewMachineAPI";
import MachineProcessComponent from "./MachineProcessComponent";



class MachineProcessContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          machineArray: [],
      }
      this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
      this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
  }

  componentDidMount() {
      getDataCard(this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
  }

  onSuccessCallbackFunc(responseData) {
      this.setState({
          machineArray: responseData.results,
      });
  }

  onFailureCallbackFunc(responseData) {
      console.log(responseData);
  }

  render() {
      const { machineArray } = this.state;
      return (
          <MachineProcessComponent
              machineArray={machineArray}
          />
      );
  }
}

export default MachineProcessContainer;
