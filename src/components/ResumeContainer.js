import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";
import AuthNavbar from "./AuthNavBar";
import ResumeComponent from "./ResumeComponent"
import { postCreateQuote, getQuoteCount } from "../API/NewQuoteAPI";


import { step1WizardGetQuoteID, step1WizardGetQuoteCompany,
  step3WizardGetQuoteHours, step2WizardGetQuoteCost,
  step2WizardGetQuoteMaterial, step4WizardGetQuoteFlatness,
  step4WizardGetQuoteStraigtness, step4WizardGetQuoteCylindricity,
  step4WizardGetQuoteCircularity, step4WizardGetQuoteProfileLine,
  step4WizardGetQuotePerpendicularity, step4WizardGetQuoteAngularity,
  step4WizardGetQuoteProfileofaSurface, step4WizardGetQuoteSimetria,
  step4WizardGetQuoteConcentricity, step4WizardGetQuoteParallelism,
  step5WizardGetQuoteH8Hole, step5WizardGetQuoteH9Hole,
  step5WizardGetQuoteH11Hole, step5WizardGetQuoteh6Axis, step5WizardGetQuoteh7Axis,
  step5WizardGetQuoteh9Axis, step5WizardGetQuoteh11Axis, step0WizardGetQuotEQuantity,
  step0WizardGetQuoteNameComponent, step1WizardGetQuotePrice, step5WizardGetQuoteH7Hole
  } from "../Store/QuoteStore"
import { getDataCard } from "../API/NewMachineAPI";

class ResumeContainer extends Component {
  constructor(props){
  super(props);
  this.state = {
    companyId: step1WizardGetQuoteID(),
    companyName: step1WizardGetQuoteCompany(),
    companyPrice: step1WizardGetQuotePrice(),
    hoursObj: step3WizardGetQuoteHours(),
    materialCost: step2WizardGetQuoteCost(),
    materialName: step2WizardGetQuoteMaterial(),

    flatness: step4WizardGetQuoteFlatness(),
    straightness: step4WizardGetQuoteStraigtness(),
    circularity: step4WizardGetQuoteCircularity(),
    cylindricity: step4WizardGetQuoteCylindricity(),
    profileLine: step4WizardGetQuoteProfileLine(),
    parallelism: step4WizardGetQuoteParallelism(),
    perpendicularity: step4WizardGetQuotePerpendicularity(),
    angularity: step4WizardGetQuoteAngularity(),
    profileOfSurface: step4WizardGetQuoteProfileofaSurface(),
    simetria: step4WizardGetQuoteSimetria(),
    concentricity: step4WizardGetQuoteConcentricity(),


    h8Hole: step5WizardGetQuoteH8Hole(),
    h7Hole: step5WizardGetQuoteH7Hole(),
    h9Hole:step5WizardGetQuoteH9Hole(),
    h11Hole: step5WizardGetQuoteH11Hole(),
    h6Axis: step5WizardGetQuoteh6Axis(),
    h7Axis: step5WizardGetQuoteh7Axis(),
    h9Axis: step5WizardGetQuoteh9Axis(),
    h11Axis: step5WizardGetQuoteh11Axis(),

    quantity: step0WizardGetQuotEQuantity(),
    nameComponent:step0WizardGetQuoteNameComponent(),

    machineArray: [],
    stepFiveSum: 0,
    subtotal: 0,
    total:0,
    ivaTotal: 0,
    id:0,
  }
  this.onSuccessGetCallbackFunc = this.onSuccessGetCallbackFunc.bind(this);
  this.onSubmitClick=this.onSubmitClick.bind(this);
  this.onSuccessCreateCallbackFunc = this.onSuccessCreateCallbackFunc.bind(this);
  this.onSuccessCountCallBack = this.onSuccessCountCallBack.bind(this);
}

onSuccessCountCallBack(responseData){
    this.setState({
      id:responseData.results +1,
    });
}

onSuccessGetCallbackFunc(responseData) {
  const { hoursObj, companyPrice, stepFiveSum, quantity } = this.state;
  var machinePriceSum = 0;
  for (let item of responseData.results)
  {
    console.log("onSuccessCallbackFunc | for loop | item", item);
    const hour = hoursObj[item.id];
    if (hour !== undefined) {
      var newprice =+ parseInt(item.price) + parseInt(companyPrice);
      machinePriceSum =+ parseInt( hour ) * newprice + stepFiveSum;

      console.log("onSuccessCallbackFunc | for loop | item.price", item.price);
      console.log("onSuccessCallbackFunc | for loop | companyPrice", companyPrice);
      console.log("onSuccessCallbackFunc | for loop | machinePriceSum", machinePriceSum);
      console.log("onSuccessCallbackFunc | for loop | stepFiveSum", stepFiveSum);
      console.log("onSuccessCallbackFunc | for loop | newprice", newprice);
    }
  }
  var subtotal = machinePriceSum*quantity;
  console.log("onSuccessCallbackFunc | subtotal", subtotal);
  console.log("onSuccessCallbackFunc | quantity", quantity);

  var ivaTotal= subtotal*0.16;
  var total = subtotal + ivaTotal;
  console.log("onSuccessCallbackFunc | total", total);


  this.setState({
      machineArray: responseData.results,
      subtotal:subtotal,
      ivaTotal:ivaTotal,
      total:total,
  });
}

componentDidMount() {
    const { h7Hole, h8Hole, h9Hole, h11Hole, h6Axis, h7Axis, h9Axis, h11Axis,
    straightness, flatness, perpendicularity, circularity, cylindricity,
    profileLine, parallelism, angularity, profileOfSurface, symmetry,
    concentricity, materialCost } = this.state;
    let stepFiveSum = 0;
    if (h7Hole !== null && h7Hole !== undefined && h7Hole !== ""){
      stepFiveSum += parseInt(h7Hole);
    }
    if (h8Hole !== null && h8Hole !== undefined && h8Hole !== ""){
      stepFiveSum += parseInt(h8Hole);
    }
    if (h9Hole !== null && h9Hole !== undefined && h9Hole !== ""){
      stepFiveSum += parseInt(h9Hole);
    }
    if (h11Hole !== null && h11Hole !== undefined && h11Hole !== ""){
      stepFiveSum += parseInt(h11Hole);
    }
    if (h6Axis !== null && h6Axis !== undefined && h6Axis !== ""){
      stepFiveSum += parseInt(h6Axis);
    }
    if (h7Axis !== null && h7Axis !== undefined && h7Axis !== ""){
      stepFiveSum += parseInt(h7Axis);
    }
    if (h9Axis !== null && h9Axis !== undefined && h9Axis !== ""){
      stepFiveSum += parseInt(h9Axis);
    }
    if (h11Axis !== null && h11Axis !== undefined && h11Axis !== ""){
      stepFiveSum += parseInt(h11Axis);
    }
    if (straightness !== null && straightness !== undefined && straightness !== ""){
      stepFiveSum += parseInt(straightness);
    }
    if (flatness !== null && flatness !== undefined && flatness !== ""){
      stepFiveSum += parseInt(flatness);
    }
    if (perpendicularity !== null && perpendicularity !== undefined && perpendicularity !== ""){
      stepFiveSum += parseInt(perpendicularity);
    }
    if (circularity !== null && circularity !== undefined && circularity !== ""){
      stepFiveSum += parseInt(circularity);
    }
    if (cylindricity !== null && cylindricity !== undefined && cylindricity !== ""){
      stepFiveSum += parseInt(cylindricity);
    }
    if (profileLine !== null && profileLine !== undefined && profileLine !== ""){
      stepFiveSum += parseInt(profileLine);
    }
    if (parallelism !== null && parallelism !== undefined && parallelism !== ""){
      stepFiveSum += parseInt(parallelism);
    }
    if (angularity !== null && angularity !== undefined && angularity !== ""){
      stepFiveSum += parseInt(angularity);
    }
    if (profileOfSurface !== null && profileOfSurface !== undefined && profileOfSurface !== ""){
      stepFiveSum += parseInt(profileOfSurface);
    }
    if (symmetry !== null && symmetry !== undefined && symmetry !== ""){
      stepFiveSum += parseInt(symmetry);
    }
    if (concentricity !== null && concentricity !== undefined && concentricity !== ""){
      stepFiveSum += parseInt(concentricity);
    }
    if (materialCost !== null && materialCost !== undefined && materialCost !== ""){
      stepFiveSum += parseInt(materialCost);
    }
    this.setState({
      stepFiveSum:stepFiveSum,
    }, ()=>{
      getDataCard(this.onSuccessGetCallbackFunc, this.onFailureCallbackFunc);
      getQuoteCount(this.onSuccessCountCallBack);
    });
}
onSubmitClick(e) {
    postCreateQuote(this.state, this.onSuccessCreateCallbackFunc, this.onFailureCallbackFunc);
}
onSuccessCreateCallbackFunc(responseData){
  console.log("onSuccessCreateCallbackFunc | responseData", responseData);
  alert("finished!");
  this.props.history.push("/home");

}
  render(){
    const { companyId, companyName, machineArray, hoursObj,
       materialCost, materialName, flatness, straightness,
       circularity, cylindricity, profileLine, parallelism,
       perpendicularity, angularity, profileOfSurface,
       symmetry, concentricity, h7Hole, h8Hole, h9Hole,
       h11Hole, h6Axis, h7Axis, h9Axis, h11Axis, quantity,
       nameComponent, companyPrice, stepFiveSum, ivaTotal, subtotal, total, id} = this.state;
       console.log("ResumeContainer | render", h7Hole);

      return (

        <ResumeComponent
          onSubmitClick={this.onSubmitClick}
          nameComponent={nameComponent}
          quantity={quantity}

          machineArray={machineArray}
          companyId= {companyId}
          companyName={companyName}
          companyPrice={companyPrice}
          hoursObj= {hoursObj}
          materialCost={materialCost}
          materialName={materialName}

          flatness={flatness}
          straightness={straightness}
          circularity={circularity}
          cylindricity={cylindricity}
          profileLine={profileLine}
          parallelism={parallelism}
          perpendicularity={perpendicularity}
          angularity={angularity}
          profileOfSurface={profileOfSurface}
          symmetry={symmetry}
          concentricity={concentricity}

          h7Hole={h7Hole}
          h8Hole={h8Hole}
          h9Hole={h9Hole}
          h11Hole={h11Hole}
          h6Axis={h6Axis}
          h7Axis={h7Axis}
          h9Axis={h9Axis}
          h11Axis={h11Axis}

          stepFiveSum={stepFiveSum}
          subtotal={subtotal}
          ivaTotal={ivaTotal}
          total={total}
          id={id}

        />
      );
  }
}
export default ResumeContainer;
