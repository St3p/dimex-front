import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";
import AuthNavbar from "./AuthNavBar";
import ResumeComponent from "./ResumeComponent"
import { step1WizardGetQuoteID, step1WizardGetQuoteCompany,
  step3WizardGetQuoteHours, step2WizardGetQuoteCost,
  step2WizardGetQuoteMaterial, step4WizardGetQuoteFlatness,
  step4WizardGetQuoteStraigtness, step4WizardGetQuoteCylindricity,
  step4WizardGetQuoteCircularity, step4WizardGetQuoteProfileLine,
  step4WizardGetQuotePerpendicularity, step4WizardGetQuoteAngularity,
  step4WizardGetQuoteProfileofaSurface, step4WizardGetQuoteSymmetry,
  step4WizardGetQuoteConcentricity, step4WizardGetQuoteParallelism,
  step5WizardGetQuoteH8Hole, step5WizardGetQuoteH9Hole,
  step5WizardGetQuoteH11Hole, step5WizardGetQuoteh6Axis, step5WizardGetQuoteh7Axis,
  step5WizardGetQuoteh9Axis, step5WizardGetQuoteh11Axis
  } from "../Store/QuoteStore"
import { getDataCard } from "../API/NewMachineAPI";

class ResumeContainer extends Component {
  constructor(props){
  super(props);
  this.state = {
    companyId: step1WizardGetQuoteID(),
    companyName: step1WizardGetQuoteCompany(),
    hoursObj: [step3WizardGetQuoteHours()],
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
    symmetry: step4WizardGetQuoteSymmetry(),
    concentricity: step4WizardGetQuoteConcentricity(),

    h8Hole: step5WizardGetQuoteH8Hole(),
    h8Hole: step5WizardGetQuoteH8Hole(),
    h9Hole:step5WizardGetQuoteH9Hole(),
    h11Hole: step5WizardGetQuoteH11Hole(),
    h6Axis: step5WizardGetQuoteh6Axis(),
    h7Axis: step5WizardGetQuoteh7Axis(),
    h9Axis: step5WizardGetQuoteh9Axis(),
    h11Axis: step5WizardGetQuoteh11Axis(),

    machineArray: [],
  }
  this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
}

onSuccessCallbackFunc(responseData) {
  this.setState({
      machineArray: responseData.results,
  });
}

componentDidMount() {
    getDataCard(this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
}

  render(){
    const { companyId, companyName, machineArray, hoursObj,
       materialCost, materialName, flatness, straightness,
       circularity, cylindricity, profileLine, parallelism,
       perpendicularity, angularity, profileOfSurface,
       symmetry, concentricity, h7Hole, h8Hole, h9Hole,
       h11Hole, h6Axis, h7Axis, h9Axis, h11Axis} = this.state;
      return (

        <ResumeComponent
          machineArray={machineArray}
          companyId= {companyId}
          companyName={companyName}
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
        />
      );
  }
}
export default ResumeContainer;
