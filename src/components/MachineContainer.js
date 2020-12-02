import React, { Component } from "react";
import MachineComponent from "./MachineComponent";
import { getDataCard } from "../API/NewMachineAPI";


class MachineContainer extends Component{
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
          <MachineComponent
              machineArray={machineArray}
          />
      );
  }
}

export default MachineContainer;
