import React, { Component } from "react";
import NewMachineComponent from "./NewMachineComponent";
import { postCreateMachine } from "../API/NewMachineAPI";


class NewMachineContainer extends Component{
  constructor(props) {
      super(props);
      this.state = {
          machine: "",
          foto: "",
          description: "",
          capacities: "",
      }
      this.onMachineChange = this.onMachineChange.bind(this);
      this.onfotoChange = this.onfotoChange.bind(this);
      this.onDescriptionChange = this.onDescriptionChange.bind(this);
      this.onCapacitiesChange = this.onCapacitiesChange.bind(this);
      this.onSubmitClick = this.onSubmitClick.bind(this);
      this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
      this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
  }

  onMachineChange(e) {
      this.setState({
          machine: e.target.value,
      });
  };

  onfotoChange(e) {
      this.setState({
          foto: e.target.value,
      });
  };

  onDescriptionChange(e) {
      this.setState({
          description: e.target.value,
      });
  };

  onCapacitiesChange(e) {
      this.setState({
          capacities: e.target.value,
      });
  };

  onSubmitClick(e) {
      const { machine, foto, description, capacities } = this.state;
      const postData = {
          machine: machine,
          foto: foto,
          description: description,
          capacities: capacities,

      };
      postCreateMachine(postData, this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
  }

  onSuccessCallbackFunc(responseData) {
      alert(responseData.message);
      this.props.history.push("/quote");
  }

  onFailureCallbackFunc(responseData) {
      alert(responseData.error);
  }


  render() {
      const { machine, foto, description, capacities } = this.state;
      return (
          <NewMachineComponent
              machine={machine}
              foto={foto}
              description={description}
              capacities={capacities}
              onMachineChange={this.onMachineChange}
              onfotoChange={this.onfotoChange}
              onCapacitiesChange={this.onCapacitiesChange}
              onDescriptionChange={this.onDescriptionChange}
              onSubmitClick={this.onSubmitClick}
          />
      );
  }
}

export default NewMachineContainer;
