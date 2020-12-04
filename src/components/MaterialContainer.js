import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";
import AuthNavbar from "./AuthNavBar";
import MaterialComponent from "./MaterialComponent";
import { step2WizardSetQuote } from "../Store/QuoteStore";


class MaterialContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
          material: "",
          cost: "",
          delivery: "",
      }
      this.onMaterialChange = this.onMaterialChange.bind(this);
      this.onCostChange = this.onCostChange.bind(this);
      this.onDeliveryChange = this.onDeliveryChange.bind(this);
      this.onSubmitClick = this.onSubmitClick.bind(this);
      this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
      this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
  }

  onMaterialChange(e) {
      this.setState({
          material: e.target.value,
      });
  };

  onCostChange(e) {
      this.setState({
          cost: e.target.value,
      });
  };

  onDeliveryChange(e) {
      this.setState({
          delivery: e.target.value,
      });
  };


  onSubmitClick(e) {
      const { material, cost, delivery } = this.state;
      const postData = {
          material: material,
          cost: cost,
          delivery: delivery,
      };
     step2WizardSetQuote(material, cost, delivery);
     this.props.history.push("/machineProcess");
  }

  onSuccessCallbackFunc(responseData) {
      alert(responseData.message);
      this.props.history.push("/quote");
  }

  onFailureCallbackFunc(responseData) {
      alert(responseData.error);
  }

  render(){
    const { material, cost, delivery } = this.state;
    return (
            <MaterialComponent
            material={material}
            cost={cost}
            delivery={delivery}
            onMaterialChange={this.onMaterialChange}
            onCostChange={this.onCostChange}
            onDeliveryChange={this.onDeliveryChange}
            onSubmitClick={this.onSubmitClick}
        />
      );
  }
}
export default MaterialContainer;
