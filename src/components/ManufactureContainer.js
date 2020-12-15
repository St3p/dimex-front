import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";
import AuthNavbar from "./AuthNavBar";
import ManufactureComponent from "./ManufactureComponent";
import { step0WizardSetQuote } from "../Store/QuoteStore";



class ManufactureContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
          nameComponent: localStorage.getItem("quoteStepZeroNameComponent"),
          quantity:localStorage.getItem("quoteStepZeroQuantity"),
      }
      this.onQuantityChange = this.onQuantityChange.bind(this);
      this.onNameChange = this.onNameChange.bind(this);
      this.onSubmitClick = this.onSubmitClick.bind(this);
      this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
      this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
  }

  onNameChange(e) {
      this.setState({
          nameComponent: e.target.value,
      });
  };


  onQuantityChange(e){
    this.setState({
        quantity: e.target.value,
    });
};


  onSubmitClick(e) {
      const { nameComponent, quantity} = this.state;
      const postData = {
          nameComponent: nameComponent,
          quantity: quantity,
      };
     step0WizardSetQuote(nameComponent, quantity);
     this.props.history.push("/quote");
  }

  onSuccessCallbackFunc(responseData) {
      alert(responseData.message);
  }

  onFailureCallbackFunc(responseData) {
      alert(responseData.error);
  }

  render(){
    const { nameComponent, quantity} = this.state;
    return (
            <ManufactureComponent
            quantity={quantity}
            nameComponent={nameComponent}
            onQuantityChange={this.onQuantityChange}
            onNameChange={this.onNameChange}
            onSubmitClick={this.onSubmitClick}
        />
      );
  }
}
export default ManufactureContainer;
