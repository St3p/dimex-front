import React, { Component } from "react";
import QuoteComponent from "./QuoteComponent";
import { getDataCard } from "../API/NewCompanyAPI";
import { step1WizardSetQuote } from "../Store/QuoteStore";

class QuoteContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          companyArray: [],
      }
      this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
      this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
      this.onClick = this.onClick.bind(this);

  }

  componentDidMount() {
      getDataCard(this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
  }

  onSuccessCallbackFunc(responseData) {
      this.setState({
          companyArray: responseData.results,
      });
  }

  onFailureCallbackFunc(responseData) {
      console.log(responseData);
  }

  onClick(id, company){
 step1WizardSetQuote(id, company);
 this.props.history.push("/material");
  }

    render() {
        const { companyArray } = this.state;

        return (
            <QuoteComponent
            companyArray={companyArray}
            onClick={this.onClick}
            />
        );
    }
}

export default QuoteContainer;
