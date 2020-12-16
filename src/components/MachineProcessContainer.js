import React, { Component } from "react";
import { getDataCard } from "../API/NewMachineAPI";
import MachineProcessComponent from "./MachineProcessComponent";
import { step3WizardSetQuote, step3WizardGetQuoteHours } from "../Store/QuoteStore";



class MachineProcessContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          machineArray: [],
          hoursObj: step3WizardGetQuoteHours(),
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

  onHoursChange(value, id) {
    console.log(value, id);
    const { hoursObj } = this.state;
    hoursObj[id] = value;
     this.setState({
       hoursObj: hoursObj,
      });
  };
  onSubmitClick() {
    const {hoursObj} = this.state;
    step3WizardSetQuote( hoursObj );
    this.props.history.push("/criticPoints");
  }

  render() {
      const { machineArray, hoursObj } = this.state;

      return (
          <MachineProcessComponent
              machineArray={machineArray}
              onMaterialChange={this.onMaterialChange}
              onSubmitClick={this.onSubmitClick}
              onHoursChange={this.onHoursChange}
              hoursObj={hoursObj}
          />
      );
  }
}

export default MachineProcessContainer;
