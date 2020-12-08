import React, { Component } from "react";
import { getDataCard } from "../API/NewMachineAPI";
import MachineProcessComponent from "./MachineProcessComponent";
import { step3WizardSetQuote } from "../Store/QuoteStore";



class MachineProcessContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          machineArray: [],
      }
      this.onHoursChange = this.onHoursChange.bind(this);
      this.onSubmitClick = this.onSubmitClick.bind(this);
      this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
      this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
  }
  onSuccessCallbackFunc(responseData) {
      this.setState({
          machineArray: responseData.results,
      });
  }

  onFailureCallbackFunc(responseData) {
      console.log(responseData);
  }
  componentDidMount() {
      getDataCard(this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
  }

  onHoursChange(e) {
      this.setState({
          hours: e.target.value,
      });
  };
  onSubmitClick( machine, capacities, hours ) {
    step3WizardSetQuote( machine, capacities, hours );
    this.props.history.push("/criticPoints");

  }

  render() {
      const { machineArray, hours } = this.state;
      return (
          <MachineProcessComponent
              machineArray={machineArray}
              onMaterialChange={this.onMaterialChange}
              onSubmitClick={this.onSubmitClick}
              onHoursChange={this.onHoursChange}
              hours={hours}
          />
      );
  }
}

export default MachineProcessContainer;
